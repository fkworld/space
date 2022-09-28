import 'antd/dist/antd.compact.css'
import './app.css'

import React, { FC, StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AllRoutes } from '@/routes'

import { AppHeader } from './app-header'
import { AppMenu } from './app-menu'

export const App: FC = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="h-16 border-solid border-0 border-b border-b-slate-200">
            <AppHeader />
          </div>
          <div className="flex-auto flex">
            <div className="w-40 border-solid border-0 border-r border-r-slate-200">
              <div className="sticky top-0">
                <AppMenu />
              </div>
            </div>
            <div className="flex-auto p-2">
              <AllRoutes />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </StrictMode>
  )
}
