import React from 'react'
import { Circle, Marker } from '@react-google-maps/api'
import { useStore } from 'outstated'
import {
    useBusStore,
    useOthersStore,
    usePlacesStore } from '../stores'
import { TabsList } from '../types'

export const Markers: React.FunctionComponent = () => {
    const { places, activePlaces } = useStore(usePlacesStore)
    const { busPositions } = useStore(useBusStore)
    const { clickLatLng, currentTab } = useStore(useOthersStore)

    return(
        <>
            {(currentTab === TabsList.GF  ? [clickLatLng] : busPositions)
                .map((latLng, index) => (
                    <Marker
                        key={`${index}-${latLng.lat}-${latLng.lng}`}
                        icon={currentTab === TabsList.GF
                            ? null
                            : process.env.REACT_APP_BUS_ICON}
                        position={latLng}
                        noClustererRedraw
                    />
                ))}
            {places.filter(place => activePlaces
                .includes(place.name))
                .map((place, index) => (
                    <Circle
                        key={`${index}-${place.lat}-${place.lng}`}
                        radius={place.radius}
                        center={{
                            lat: place.lat,
                            lng: place.lng
                        }}
                    />
                ))
            }
        </>
    )
}
