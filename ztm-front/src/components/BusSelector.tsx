import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

type BusSelectorProps = {
    busRecords: Record<number, string>,
    activeBusId: number,
    onSelectBus(id: number): void
}

export const BusSelector: React.FunctionComponent<BusSelectorProps> = ({
    busRecords,
    activeBusId,
    onSelectBus
}) => (
    <ListWrapper>
        {Object.entries(busRecords).map(([id, name]) => (
            <Button
                key={id}
                text={name}
                onClick={() => onSelectBus(Number(id))}
                isSelected={Number(id) === activeBusId}
            />
        ))}
    </ListWrapper>
)

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  max-height: 10%;
  width: 100%;
  border: solid 4px black
`
