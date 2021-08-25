import { useState } from 'react'
import { Place } from '../types'

export const usePlaceStore = () => {
    const [places, setPlace] = useState<Array<Place>>([])

    return {
        places,
        setPlace
    }
}
