import React, { useEffect } from 'react'
import { useStore } from 'outstated'
import { LatLng, TabsList } from '../types'
import {
    useBusStore,
    usePlacesStore,
    useOthersStore,
    useSocketStore
} from '../stores'

export const ApiConnector: React.FunctionComponent = () => {
    const { socketConnection, setActiveBusses } = useStore(useSocketStore)
    const { currentTab } = useStore(useOthersStore)
    const {
        activeBuses,
        busPositions,
        setBusPositions,
        setBusList
    } = useStore(useBusStore)
    const {
        places,
        activePlaces
    } = useStore(usePlacesStore)

    socketConnection?.on('busPositionUpdate', (newBusPositions: Array<LatLng>) => {
        if (currentTab === TabsList.TrackBus || currentTab === TabsList.GFBus) {
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
                const distance = Math.sqrt((position.lng - place.lng)**2 + (position.lat - place.lat)**2)
                if (distance <= place.radius * Number(process.env.REACT_APP_RADIUS_RATIO)) {
                    console.log('Bus close to', place.name)
                }
            })
        })
    }, [busPositions])

    return(
        <div/>
    )
}
