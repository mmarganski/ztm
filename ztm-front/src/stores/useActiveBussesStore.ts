import { useState } from 'react'

export const useActiveBussesStore = () => {
    const [activeBuses, setActiveBuses] = useState<Array<string>>([])

    const toggleBus = (newBusId: string) => {
        setActiveBuses(activeBuses.includes(newBusId)
            ? activeBuses.filter(busId => busId !== newBusId)
            : activeBuses.concat(newBusId)
        )
    }

    return {
        activeBuses,
        toggleBus
    }
}
