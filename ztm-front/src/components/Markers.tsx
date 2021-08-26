import React from 'react'
import { Circle, Marker } from '@react-google-maps/api'
import { TabsList } from '../types'
import { useBus, useOthers, usePlaces } from '../hooks'

export const Markers: React.FunctionComponent = () => {
    const { places, activePlaces } = usePlaces()
    const { busPositions } = useBus()
    const { clickLatLng, currentTab } = useOthers()

    return (
        <div>
            {(currentTab === TabsList.GeoFencing  ? [clickLatLng] : busPositions)
                .map((latLng, index) => (
                    <Marker
                        key={`${index}-${latLng.lat}-${latLng.lng}`}
                        icon={currentTab === TabsList.GeoFencing
                            ? null
                            : 'Bus-icon.png'}
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
        </div>
    )
}
