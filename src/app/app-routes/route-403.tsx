import { Result } from 'antd'
import { FC } from 'react'

export const Route403: FC = () => {
  return <Result status="403" title="403" subTitle="你访问了一个没有权限的页面，请先申请权限。" />
}
