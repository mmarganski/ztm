import { useState } from 'react'
import { LatLng } from '../types'

export const useBusPositionsStore = () => {
    const [busPositions, setBusPositions] = useState<Array<LatLng>>([])

    return {
        busPositions,
        setBusPositions
    }
}
