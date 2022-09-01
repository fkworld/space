/**
 * @author fkworld
 */

import { Menu, MenuProps } from 'antd'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const AppSider: FC = () => {
  const items: MenuProps['items'] = [
    {
      key: 'home',
      label: <Link to="/">首页</Link>,
    },
    {
      key: 'menu-1',
      label: '菜单 1',
    },
    {
      key: 'menu-2',
      label: '菜单 2',
    },
  ]

  return <Menu mode="inline" theme="light" items={items} />
}
