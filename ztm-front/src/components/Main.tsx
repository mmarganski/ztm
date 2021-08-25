import React, { useState } from 'react'
import styled from 'styled-components'
import { Provider } from 'outstated'
import { Sidebar } from './Sidebar'
import { MapView } from './MapView'
import { TabsList } from '../types'
import { storeGroup } from '../stores'
import { ApiConnector } from './ApiConnector'

export const Main = () => {
    const [currentSelect, setSelect] = useState<TabsList>(TabsList.TrackBus)

    return(
        <MainWrapper>
            <Sidebar
                buttons={Object.values(TabsList)}
                onSidebarSelect={(tabName: TabsList) => setSelect(tabName)}
            />
            <Provider stores={storeGroup}>
                <ApiConnector/>
                <MapView currentTabSelect={currentSelect}/>
            </Provider>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
`
