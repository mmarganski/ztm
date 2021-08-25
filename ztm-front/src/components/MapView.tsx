import React, { useState } from 'react'
import styled from 'styled-components'
import { BusSelector } from './BusSelector'
import { Map } from './Map'
import { busRecords } from '../data'

type MapViewProps = {
    currentTabSelect: string
}
export const MapView: React.FunctionComponent<MapViewProps> = ({ currentTabSelect }) => {
    const [activeBusesIds, setActiveBuses] = useState<Array<number>>([])

    const toggleBus = (newBusId: number) => {
        setActiveBuses(activeBusesIds.includes(newBusId)
            ? activeBusesIds.filter(busId => busId !== newBusId)
            : activeBusesIds.concat(newBusId)
        )
    }

    return(
        <Wrapper>
            {currentTabSelect === ButtonsList.TrackBus && (<BusSelector
                busRecords={busRecords}
                activeBusesIds={activeBusesIds}
                onSelectBus={toggleBus}
            />)
            }
            <Map activeBusId={activeBusId}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
