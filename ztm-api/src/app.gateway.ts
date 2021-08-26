import {
    OnGatewayConnection,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets'
import { Cron } from '@nestjs/schedule'
import { Server, Socket } from 'socket.io'
import axios from 'axios'

const convert = require('xml-js')

type LatLng = {
    lat: number,
    lng: number
}

type innerElement = {
    text: string
}

type outerElement = {
    elements: Array<innerElement>
}

@WebSocketGateway()
export class AppGateway implements OnGatewayConnection{
    @WebSocketServer() server: Server
    private client: Socket = null
    private currentBuses: Array<string> = []

    handleConnection(client: Socket){
        this.client = client
    }

    @Cron('*/5 * * * * *')
    async sendBusPosition(): Promise<null> {
        if (this.currentBuses.length === 0) {
            return null
        }

        const response = await this.makeRequest(`${process.env.ZTM_URL}${this.currentBuses.join(',')}`)
        const jsonResponse = convert.xml2json(response.data, {compact: false, spaces: 4})
        const arrayData = Object.values(
            JSON.parse(jsonResponse)?.elements?.[0]?.elements
            ).map((element: outerElement) => element?.elements?.[0]?.text
                .replace(/^\[|]$/g, '')
                .split(','))
            .map((busDetails: Array<string>) => busDetails.length >= 10
                ? { lat: Number(busDetails[10]), lng: Number(busDetails[9]) } as LatLng
                : ''
            ).filter(Boolean)

        this.client.emit('busPositionUpdate', arrayData as Array<LatLng>)
    }

    @SubscribeMessage('setActiveBusses')
    setActiveBusses(client: Socket, activeBuses: Array<string>) {
        this.currentBuses = activeBuses
    }

    @SubscribeMessage('getBusesList')
    async getBusesList(client: Socket) {
        const response = await this.makeRequest(process.env.ZTM_URL_BUSLIST)
        const [,...data] = response.data.flat().flat()
        const ids = data.filter((data: string, index: number) => index % 2 === 0)
        const names = data.filter((data: string, index: number) => index % 2 === 1)
        const zippedIdsNames = ids.map((id: string, index: number) => [id, names[index] || null])

        client.emit('busesList', zippedIdsNames)
    }

    private makeRequest(url: string) {
        return axios.get(url, {
            headers: {
                Accept: 'application/json',
                'Accept-Language': `pl-PL;q=${process.env.ZTM_Q_KEY}`,
                Cookie: process.env.ZTM_SESSION_ID
            }
        })
    }
}
