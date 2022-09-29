import {
  CaretDownOutlined,
  GithubOutlined,
  LoginOutlined,
  MessageOutlined,
  NotificationOutlined,
} from '@ant-design/icons'
import { Avatar, Dropdown, Menu, MenuProps, Tooltip } from 'antd'
import React, { FC } from 'react'

import { useUser } from '@/stores'

import { APP_LOGO, APP_NAME } from './app-config'

export const AppHeader: FC = () => {
  const { user } = useUser()

  const menuItems: MenuProps['items'] = [
    {
      type: 'group',
      label: `欢迎 ${user.username}`,
    },
    { type: 'divider' },
    {
      type: 'group',
      label: `账号`,
      children: [
        { key: 'login', label: '登录', icon: <LoginOutlined /> },
        { key: 'logout', label: '登出', icon: <LoginOutlined /> },
        { key: 'message', label: '消息', icon: <MessageOutlined /> },
      ],
    },
    { type: 'divider' },
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
    <div className="h-full flex items-center gap-2">
      <div className="text-4xl">{APP_LOGO}</div>
      <div className="text-xl">{APP_NAME}</div>
      <Tooltip
        placement="rightBottom"
        overlayInnerStyle={{ width: 'max-content' }}
        title={
          <div>
            <span className="font-bold">Commit hash: </span>
            {__APP_COMMIT_HASH__}
            <br />
            <span className="font-bold">Commit date: </span>
            {__APP_COMMIT_DATE__}
          </div>
        }
      >
        <div className="text-black/50">{__APP_VERSION__}</div>
      </Tooltip>
      <div className="flex-auto" />
      <div>
        <Avatar icon={<GithubOutlined />} />
        <Dropdown overlay={<Menu className="w-40" items={menuItems} />} trigger={['click']} arrow>
          <CaretDownOutlined />
        </Dropdown>
      </div>
    </div>
  )
}
