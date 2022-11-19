import {
  GithubOutlined,
  LoginOutlined,
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar, Dropdown, MenuProps, Tag, Tooltip } from 'antd'
import { FC } from 'react'

import { APP_LOGO, APP_NAME } from './app-config'

export const AppHeader: FC = () => {
  return (
    <div className="h-full flex items-center gap-2">
      <div className="text-4xl">{APP_LOGO}</div>
      <div className="text-xl">{APP_NAME}</div>
      <Tooltip
        placement="rightBottom"
        overlayInnerStyle={{ width: 'max-content' }}
        title={
          <div className="font-mono">
            <span className="font-bold">Commit hash: </span>
            {__APP_COMMIT_HASH__}
            <br />
            <span className="font-bold">Commit date: </span>
            {__APP_COMMIT_DATE__}
          </div>
        }
      >
        <Tag>{__APP_VERSION__}</Tag>
      </Tooltip>
      <div className="flex-auto" />
      <Dropdown menu={{ items: USER_MENU_ITEMS }} trigger={['hover']}>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </div>
  )
}

const USER_MENU_ITEMS: MenuProps['items'] = [
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
