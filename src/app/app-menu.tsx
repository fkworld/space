import { GithubOutlined, HomeOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const AppMenu: FC = () => {
  const items: MenuProps['items'] = [
    {
      key: 'home',
      label: <Link to="/">首页</Link>,
      icon: <HomeOutlined />,
    },
    {
      key: 'menu-1',
      label: '菜单 1',
      icon: <GithubOutlined />,
    },
    {
      key: 'menu-2',
      label: '菜单 2',
      icon: <GithubOutlined />,
    },
  ]

  return <Menu mode="inline" theme="light" items={items} />
}
