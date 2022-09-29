import 'antd/dist/antd.compact.css'
import './app.css'

import React, { FC, StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AllRoutes } from '@/routes'
import { UserContextProvider } from '@/stores'

import { AppHeader } from './app-header'
import { AppMenu } from './app-menu'

export const App: FC = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <UserContextProvider>
          <div className="flex flex-col min-h-screen">
            <div className="h-14 pl-8 pr-8 bg-white z-10 shadow-around">
              <AppHeader />
            </div>
            <div className="flex-auto flex">
              <div className="w-40 shadow-around">
                <div className="sticky top-0 pt-4">
                  <AppMenu />
                </div>
              </div>
              <div className="flex-auto p-4">
                <AllRoutes />
              </div>
            </div>
          </div>
        </UserContextProvider>
      </BrowserRouter>
    </StrictMode>
  )
}
