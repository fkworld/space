import { GithubOutlined } from '@ant-design/icons'
import { Menu, MenuProps } from 'antd'
import { uniqueId } from 'lodash'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export const AppMenu: FC = () => {
  const items: MenuProps['items'] = [
    {
      key: uniqueId(),
      label: <Link to="/">首页</Link>,
    },
    {
      key: uniqueId(),
      label: '菜单 1',
    },
    {
      key: uniqueId(),
      label: '菜单 2',
    },
    {
      key: uniqueId(),
      label: '特殊页面',
      children: [
        { key: uniqueId(), label: <Link to="/403">403</Link> },
        { key: uniqueId(), label: <Link to="/404">403</Link> },
      ],
    },
  ]

  return <Menu mode="inline" theme="light" style={{ borderWidth: 0 }} items={items} />
}
