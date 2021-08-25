import { useState } from 'react'

export const useActivePlacesStore = () => {
    const [activePlaces, setActivePlace] = useState<Array<string>>([])

    const togglePlace = (newPlaceName: string) => {
        setActivePlace(activePlaces.includes(newPlaceName)
            ? activePlaces.filter(placeName => placeName !== newPlaceName)
            : activePlaces.concat(newPlaceName)
        )
    }

    return {
        activePlaces,
        togglePlace
    }
}
