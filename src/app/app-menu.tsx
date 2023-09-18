import { HomeOutlined } from "@ant-design/icons";
import { ConfigProvider, Menu, MenuProps } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";

export const AppMenu: FC = () => {
  return (
    <ConfigProvider
      theme={{ components: { Menu: { activeBarBorderWidth: 0 } } }}
    >
      <Menu mode="inline" theme="light" items={APP_MENU_ITEMS} />
    </ConfigProvider>
  );
};

const APP_MENU_ITEMS: MenuProps["items"] = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: <Link to="/">首页</Link>,
  },
];
