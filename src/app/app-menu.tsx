import { Menu, MenuProps } from 'antd'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const AppMenu: FC = () => {
  const items: MenuProps['items'] = [
    {
      key: 'home',
      label: <Link to="/">首页</Link>,
    },
    {
      key: 'special',
      label: '特殊页面',
      children: [
        { key: 'special-403', label: <Link to="/403">403</Link> },
        { key: 'special-404', label: <Link to="/404">403</Link> },
      ],
    },
  ]

  return <Menu mode="inline" theme="light" style={{ borderWidth: 0 }} items={items} />
}
