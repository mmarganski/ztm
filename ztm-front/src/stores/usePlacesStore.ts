import { useState } from 'react'
import { Place } from '../types'

export const usePlacesStore = () => {
    const [activePlaces, setActivePlace] = useState<Array<string>>([])
    const [places, setPlace] = useState<Array<Place>>([])

    const togglePlace = (newPlaceName: string) => {
        setActivePlace(activePlaces.includes(newPlaceName)
            ? activePlaces.filter(placeName => placeName !== newPlaceName)
            : activePlaces.concat(newPlaceName)
        )
    }

    return {
        activePlaces,
        togglePlace,
        places,
        setPlace
    }
}
