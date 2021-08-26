import React from 'react'
import styled from 'styled-components'
import { BusSelector } from './BusSelector'
import { Map } from './Map'
import { PlaceSelector } from './PlaceSelector'
import { TabsList } from '../types'
import { useOthers } from '../hooks'

export const MapView: React.FunctionComponent = () => {
    const { currentTab } = useOthers()

    const displayTabsSelectors = () => {
        switch (currentTab) {
            case TabsList.TrackBus:
                return (
                    <BusSelector/>
                )

            case TabsList.GF:
                return (
                    <PlaceSelector isAddingAvailable />
                )

            default:
            case TabsList.GFBus:
                return (
                    <div>
                        <BusSelector/>
                        <PlaceSelector isAddingAvailable={false}/>
                    </div>
                )
        }
    }

    return (
        <Wrapper>
            {displayTabsSelectors()}
            <Map/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
