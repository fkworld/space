/**
 * @author fkworld
 */

import {
  CaretDownOutlined,
  GithubOutlined,
  LoginOutlined,
  MessageOutlined,
  NotificationOutlined,
} from '@ant-design/icons'
import { Button, Dropdown, Menu, MenuProps } from 'antd'
import React, { FC } from 'react'

import { APP_LOGO, APP_NAME } from './app-config'

export const AppHeader: FC = () => {
  const menuItems: MenuProps['items'] = [
    {
      type: 'group',
      label: '账号',
      children: [
        { key: 'login', label: '登录', icon: <LoginOutlined /> },
        { key: 'logout', label: '登出', icon: <LoginOutlined /> },
        { key: 'message', label: '消息', icon: <MessageOutlined /> },
      ],
    },
    {
      type: 'group',
      label: '链接',
      children: [
        { key: 'changelog', label: '更新日志', icon: <NotificationOutlined /> },
        { key: 'gitRepo', label: 'Git 仓库', icon: <GithubOutlined /> },
      ],
    },
  ]

  return (
    <div className="h-full flex items-center gap-2 pl-4 pr-4">
      <div className="text-4xl">{APP_LOGO}</div>
      <div className="text-xl">{APP_NAME}</div>
      <div className="flex-auto" />
      <Dropdown overlay={<Menu items={menuItems} />} trigger={['click']}>
        <Button size="small">
          更多
          <CaretDownOutlined />
        </Button>
      </Dropdown>
    </div>
  )
}
