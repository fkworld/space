import { Menu } from 'antd'
import { FC } from 'react'

import { MENU_CONFIG } from './menu-config'

export const AppMenu: FC = () => {
  return <Menu mode="inline" theme="light" style={{ borderWidth: 0 }} items={MENU_CONFIG} />
}
