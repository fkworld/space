import { Menu, MenuProps } from 'antd'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const AppMenu: FC = () => {
  return <Menu mode="inline" theme="light" style={{ borderWidth: 0 }} items={APP_MENU_ITEMS} />
}

const APP_MENU_ITEMS: MenuProps['items'] = [
  {
    key: 'home',
    label: <Link to="/">首页</Link>,
  },
  {
    key: 'special',
    label: '特殊页面',
    type: 'group',
    children: [
      { key: 'example-url', label: <Link to="/example/url">url</Link> },
      { key: 'special-403', label: <Link to="/403">403</Link> },
      { key: 'special-404', label: <Link to="/404">403</Link> },
    ],
  },
]
