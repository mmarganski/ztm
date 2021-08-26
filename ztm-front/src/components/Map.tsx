import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import styled from 'styled-components'
import FadeLoader from 'react-spinners/ClipLoader'
import { Markers } from './Markers'
import { useOthers } from '../hooks'

export const Map: React.FunctionComponent = () => {
    const { clickLatLng, setClickLatLng } = useOthers()
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: `${process.env.REACT_APP_MAP_KEY}`
    })

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
            ) : (
                <Loader>
                    <FadeLoader size={80}/>
                </Loader>
            )}
        </MapWrapper>
    )
}

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Loader = styled.div`
  padding: 20%;
`
