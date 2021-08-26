import React from 'react'
import styled from 'styled-components'
import { useStore } from 'outstated'
import { Button } from './Button'
import { useOthersStore } from '../stores'
import { TabsList } from '../types'

export const Sidebar: React.FunctionComponent = () => {
    const { currentTab, setCurrentTab } = useStore(useOthersStore)

    return (
        <SidebarWrapper>
            {Object.values(TabsList).map((tabName, index) => (
                <Button
                    key={`${index}-${tabName}`}
                    text={tabName}
                    onClick={() => {
                        setCurrentTab(tabName)
                    }}
                    isSelected={currentTab === tabName}
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
