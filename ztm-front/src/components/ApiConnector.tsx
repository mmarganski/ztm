import React, { useEffect } from 'react'
import { LatLng, TabsList } from '../types'
import {
    useBus,
    useOthers,
    usePlaces,
    useSocket
} from '../hooks'

export const ApiConnector: React.FunctionComponent = () => {
    const { socketConnection, setActiveBusses } = useSocket()
    const { currentTab } = useOthers()
    const {
        activeBuses,
        busPositions,
        setBusPositions,
        setBusList
    } = useBus()
    const {
        places,
        activePlaces
    } = usePlaces()

    socketConnection?.on('busPositionUpdate', (newBusPositions: Array<LatLng>) => {
        if (currentTab === TabsList.TrackBus || currentTab === TabsList.GeoFencingBus) {
            setBusPositions(newBusPositions)
        }
    })
    socketConnection?.on('busesList', (busesList: Array<Array<string>>) => {
        setBusList(Object.fromEntries(busesList))
    })

    useEffect(() => {
        setActiveBusses(activeBuses)
    }, [activeBuses])

    useEffect(() => {
        const matchingPlaces = places.filter(place => activePlaces.includes(place.name))

        busPositions.forEach(position => {
            matchingPlaces.forEach(place => {
                if (measureDistance(place, position) < place.radius) {
                    console.log('Bus close to', place.name)
                }
            })
        })
    }, [busPositions])

    const measureDistance = (position1: LatLng, position2: LatLng) => {
        const earthRadius = 6378.137
        const latDiff = position2.lat * Math.PI / 180 - position1.lat * Math.PI / 180
        const lngDiff = position2.lng * Math.PI / 180 - position1.lng * Math.PI / 180
        const a = Math.sin(latDiff/2) * Math.sin(latDiff/2) +
            Math.cos(position1.lat * Math.PI / 180) * Math.cos(position2.lat * Math.PI / 180) *
            Math.sin(lngDiff/2) * Math.sin(lngDiff/2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        const d = earthRadius * c

        return d * 1000
    }

    return (
        <div/>
    )
}
