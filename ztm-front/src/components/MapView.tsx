import React, { useState } from 'react'
import styled from 'styled-components'
import { BusSelector } from './BusSelector'
import { Map } from './Map'
import { busRecords } from '../data'

type MapViewProps = {
    isSelectingBus: boolean
}

export const MapView: React.FunctionComponent<MapViewProps> = ({ isSelectingBus }) => {
    const [activeBusId, setActiveBus] = useState(0)

    return(
        <Wrapper>
            {isSelectingBus &&
                <BusSelector
                    busRecords={busRecords}
                    activeBusId={activeBusId}
                    onSelectBus={(id: number) => setActiveBus(activeBusId === id ? 0 : id)}
                />
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
