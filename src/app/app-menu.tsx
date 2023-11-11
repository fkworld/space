import { ConfigProvider, Menu } from 'antd';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ROUTES } from '@/configs/routes';

export const AppMenu: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const items = ROUTES.filter((v) => v.isMenu).map((v) => {
    return { key: v.path, label: v.path };
  });

  return (
    <ConfigProvider theme={{ components: { Menu: { activeBarBorderWidth: 0 } } }}>
      <Menu
        defaultSelectedKeys={[location.pathname]}
        items={items}
        mode="inline"
        theme="light"
        onClick={(v) => navigate(v.key)}
      />
    </ConfigProvider>
  );
};
