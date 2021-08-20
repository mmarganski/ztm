import React, { useState } from 'react'
import styled from 'styled-components'
import { VoidFunction } from '../types'
import { Button } from './Button'

type BusSelectorProps = {
    busRecords: Record<string, string>,
    onSelectBus: VoidFunction<string>
}

export const BusSelector: React.FunctionComponent<BusSelectorProps> = ({ busRecords, onSelectBus }) => {
    const [activeButton, setActiveButton] = useState('')

    const onSelect = (id: string) => {
        const toggleResult = activeButton === id ? '' : id

        onSelectBus(toggleResult)
        setActiveButton(toggleResult)
    }

    return (
        <ListWrapper>
            {Object.entries(busRecords).map(([id, name]) => (
                <Button
                    key={id}
                    text={name}
                    onClick={() => onSelect(id)}
                    isSelected={id === activeButton}
                />
            ))}
        </ListWrapper>
    )
}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  max-height: 10%;
  width: 100%;
  border: solid 4px black
`
