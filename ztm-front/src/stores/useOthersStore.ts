import { useState } from 'react'
import { LatLng, TabsList } from '../types'

export const useOthersStore = () => {
    const [currentTab, setCurrentTab] = useState<TabsList>(TabsList.TrackBus)
    const [clickLatLng, setClickLatLng] = useState<LatLng>({
        lat: Number(process.env.REACT_APP_START_LAT),
        lng: Number(process.env.REACT_APP_START_LNG)
    })

    return {
        currentTab,
        setCurrentTab,
        clickLatLng,
        setClickLatLng
    }
}
