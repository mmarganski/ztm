import React from 'react'
import styled from 'styled-components'
import { useStore } from 'outstated'
import { Button } from './Button'
import { useBusStore } from '../stores'

export const BusSelector: React.FunctionComponent = () => {
    const {
        busList,
        activeBuses,
        toggleBus
    } = useStore(useBusStore)

    return (
        <ListWrapper>
            {Object.entries(busList)
                .sort(([, name1], [, name2]) => name1.localeCompare(name2))
                .map(([id, name]) => (
                    <Button
                        key={id}
                        text={name}
                        onClick={() => toggleBus(name)}
                        isSelected={activeBuses.includes(name)}
                    />
                ))}
        </ListWrapper>
    )
}

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  border-bottom: solid 4px black;
`
