/**
 * @author fkworld
 */

import { Button, Result } from 'antd'
import React, { FC } from 'react'

export const Route404: FC = () => {
  return (
    <Result
      status="404"
      title="404 页面不存在"
      extra={
        <Button type="primary" href="/">
          回到首页
        </Button>
      }
    />
  )
}
