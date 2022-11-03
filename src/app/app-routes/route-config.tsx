import { FC, lazy } from 'react'

export type RouteConfig = {
  path: string
  Component: FC
}

export const ROUTES: RouteConfig[] = [
  {
    path: '/home',
    Component: lazy(() => import('@/pages/home')),
  },
]
