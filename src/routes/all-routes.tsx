import React, { FC } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import { Route403 } from './route-403'
import { Route404 } from './route-404'
import { ROUTES } from './route-config'
import { RouteWrapper } from './route-wrapper'

export const AllRoutes: FC = () => {
  const element = useRoutes([
    ...ROUTES.map((config) => {
      return { path: config.path, element: <RouteWrapper config={config} /> }
    }),
    { path: '/403', element: <Route403 /> },
    { path: '/404', element: <Route404 /> },
    { path: '/', element: <Navigate to="/home" /> },
    { path: '*', element: <Route404 /> },
  ])

  return element
}
