import { Skeleton } from 'antd'
import { FC, Suspense } from 'react'

import { RouteConfig } from './route-config'

export const RouteWrapper: FC<{ config: RouteConfig }> = (props) => {
  const {
    config: { Component },
  } = props

  return (
    <Suspense fallback={<Skeleton active />}>
      <Component />
    </Suspense>
  )
}
