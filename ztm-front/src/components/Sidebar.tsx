import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button'

type SidebarProps = {
    buttons: Array<string>,
    onSidebarSelect(text: string): void
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({ buttons, onSidebarSelect }) => {
    const [selectedTab, setTab] = useState('')

    return (
        <SidebarWrapper>
            {buttons.map((buttonText, index) => (
                <Button
                    key={`${index}-${buttonText}`}
                    text={buttonText}
                    onClick={() => {
                        onSidebarSelect(buttonText)
                        setTab(selectedTab === buttonText ? '' : buttonText)
                    }}
                    isSelected={selectedTab === buttonText}
                />
            ))}
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
