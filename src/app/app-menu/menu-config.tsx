import { MenuProps } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export const MENU_CONFIG: MenuProps['items'] = [
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