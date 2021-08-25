import { useState } from 'react'
import { LatLng } from '../types'

export const useClickLatLngStore = () => {
    const [clickLatLng, setClickLatLng] = useState<LatLng>({
        lat: Number(process.env.REACT_APP_START_LAT),
        lng: Number(process.env.REACT_APP_START_LNG)
    })

    return {
        clickLatLng,
        setClickLatLng
    }
}
