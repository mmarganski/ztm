import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { VoidFunction } from '../types'

type SidebarProps = {
    buttons: Array<string>,
    onSidebarSelect: VoidFunction<string>
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({ buttons, onSidebarSelect }) => {
    const [currentSelect, setSelect] = useState('')

    return (
        <SidebarWrapper>
            {
                buttons.map((buttonText, index) => (
                    <Button
                        key={`${index}-${buttonText}`}
                        text={buttonText}
                        onClick={() => {
                            onSidebarSelect(buttonText)
                            setSelect(currentSelect === buttonText ? '' : buttonText)
                        }}
                        isSelected={currentSelect === buttonText}
                    />
                ))
            }
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  height: 100%;
  left: 0;
  border: solid 4px black
`
