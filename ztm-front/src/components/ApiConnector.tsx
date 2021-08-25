import React, { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'
import { DefaultEventsMap } from 'socket.io-client/build/typed-events'
import { useStore } from 'outstated'
import { LatLng } from '../types'
import {
    useActiveBussesStore,
    useBusListStore,
    useBusPositionsStore
} from '../stores'

export const ApiConnector: React.FunctionComponent = ({ children }) => {
    const [socketConnection, setSocketConnection] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>()
    const { setBusPositions } = useStore(useBusPositionsStore)
    const { setBusList } = useStore(useBusListStore)
    const { activeBuses } = useStore(useActiveBussesStore)

    socketConnection?.on('busPositionUpdate', (newBusPositions: Array<LatLng>) => {
        setBusPositions(newBusPositions)
    })
    socketConnection?.on('busesList', (busesList: Array<Array<string>>) => {
        setBusList(Object.fromEntries(busesList))
    })

    useEffect(() => {
        setSocketConnection(io('http://localhost:3003/', { transports: ['websocket'] }))
    }, [])

    useEffect(() => {
        socketConnection?.emit('getBusesList')
    }, [socketConnection])

    useEffect(() => {
        socketConnection?.emit('setActiveBusses', activeBuses)
    }, [activeBuses])

    return(
        <div>
            {children}
        </div>
    )
}
