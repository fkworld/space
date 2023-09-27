import { ConfigProvider, Menu } from "antd";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { MENU } from "@/configs/menu";

export const AppMenu: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <ConfigProvider
      theme={{ components: { Menu: { activeBarBorderWidth: 0 } } }}
    >
      <Menu
        mode="inline"
        theme="light"
        defaultSelectedKeys={[location.pathname]}
        onClick={(v) => navigate(v.key)}
        items={MENU}
      />
    </ConfigProvider>
  );
};
