/**
 * @author fkworld
 */

import { Button, Result } from 'antd'
import React, { FC } from 'react'

export const Route403: FC = () => {
  return (
    <Result status="403" title="403 页面无权限" extra={<Button type="primary">申请权限</Button>} />
  )
}
