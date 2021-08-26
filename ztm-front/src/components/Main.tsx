import React from 'react'
import styled from 'styled-components'
import { Provider } from 'outstated'
import { Sidebar } from './Sidebar'
import { MapView } from './MapView'
import { storeGroup } from '../stores'
import { ApiConnector } from './ApiConnector'

export const Main = () => (
    <MainWrapper>
        <Provider stores={storeGroup}>
            <Sidebar/>
            <ApiConnector/>
            <MapView/>
        </Provider>
    </MainWrapper>
)

const MainWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 100%;
`
