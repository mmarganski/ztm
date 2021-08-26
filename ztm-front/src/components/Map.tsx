import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import styled from 'styled-components'
import { useStore } from 'outstated'
import { Markers } from './Markers'
import { useOthersStore } from '../stores'

export const Map: React.FunctionComponent = () => {
    const { clickLatLng, setClickLatLng } = useStore(useOthersStore)
    const { isLoaded } = useJsApiLoader({ googleMapsApiKey: `${process.env.REACT_APP_MAP_KEY}` })

    return (
        <MapWrapper>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{
                        width: '100%',
                        height: '100%'
                    }}
                    center={clickLatLng}
                    zoom={14}
                    onClick={event => setClickLatLng({
                        lat: event?.latLng.lat(),
                        lng: event?.latLng.lng()
                    })}
                >
                    <Markers/>
                </GoogleMap>
            ) : <></>}
        </MapWrapper>
    )
}

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
