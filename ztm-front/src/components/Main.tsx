import React, { useState } from 'react'
import styled from 'styled-components'
import { Sidebar } from './Sidebar'
import { MapView } from './MapView'
import { ButtonsList } from '../types'

export const Main = () => {
    const [currentSelect, setSelect] = useState<ButtonsList>(ButtonsList.TrackBus)

    return(
        <MainWrapper>
            <Sidebar
                buttons={Object.values(ButtonsList)}
                onSidebarSelect={(tabName: ButtonsList) => setSelect(tabName)}
            />
            <MapView currentTabSelect={currentSelect}/>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
`
