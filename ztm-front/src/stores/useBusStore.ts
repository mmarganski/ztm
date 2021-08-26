import { useState } from 'react'
import { LatLng } from '../types'

export const useBusStore = () => {
    const [busPositions, setBusPositions] = useState<Array<LatLng>>([])
    const [busList, setBusList] = useState<Record<string, string>>({})
    const [activeBuses, setActiveBuses] = useState<Array<string>>([])

    const toggleBus = (newBusName: string) => {
        setActiveBuses(activeBuses.includes(newBusName)
            ? activeBuses.filter(busId => busId !== newBusName)
            : activeBuses.concat(newBusName)
        )
    }

    return {
        busPositions,
        setBusPositions,
        busList,
        setBusList,
        activeBuses,
        setActiveBuses,
        toggleBus
    }
}
