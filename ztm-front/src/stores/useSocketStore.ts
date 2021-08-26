import { useEffect, useState } from 'react'
import { io, Socket } from 'socket.io-client'

export const useSocketStore = () => {
    const [socketConnection] = useState<Socket>(
        io('http://localhost:3003/', { transports: ['websocket'] })
    )

    useEffect(() => {
        socketConnection?.emit('getBusesList')
    }, [socketConnection])

    const setActiveBusses = (activeBuses: Array<string>) => {
        socketConnection?.emit('setActiveBusses', activeBuses)
    }

    return {
        socketConnection,
        setActiveBusses
    }
}
