/**
 * @author fkworld
 */

import 'antd/dist/antd.compact.css'
import './app.css'

import { Layout } from 'antd'
import React, { FC, StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AllRoutes } from '@/routes'

import { AppHeader } from './app-header'
import { AppSider } from './app-sider'

const { Sider, Header, Content } = Layout

export const App: FC = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Layout className="app-layout">
          <Header className="app-layout-header">
            <AppHeader />
          </Header>
          <Layout>
            <Sider collapsible theme="light" className="app-layout-sider">
              <AppSider />
            </Sider>
            <Content className="app-layout-content">
              <AllRoutes />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </StrictMode>
  )
}
