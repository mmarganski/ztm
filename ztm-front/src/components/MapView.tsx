import React from 'react'
import styled from 'styled-components'
import { useStore } from 'outstated'
import { BusSelector } from './BusSelector'
import { Map } from './Map'
import { PlaceSelector } from './PlaceSelector'
import { TabsList } from '../types'
import { useOthersStore } from '../stores'

export const MapView: React.FunctionComponent = () => {
    const { currentTab } = useStore(useOthersStore)

    const displayTabsSelectors = () => {
        switch (currentTab){
            case TabsList.TrackBus:
                return (<BusSelector/>)
            case TabsList.GF:
                return (<PlaceSelector isAddingAvailable />)
            default:
            case TabsList.GFBus:
                return(<>
                    <BusSelector/>
                    <PlaceSelector isAddingAvailable={false}/>
                </>)
        }
    }

    return(
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
