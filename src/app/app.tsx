import "antd/dist/reset.css";

import { css } from "@linaria/core";
import { Divider } from "antd";
import { FC, StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "@/routes";

import { AppLogo } from "./app-logo";
import { AppMenu } from "./app-menu";

export const App: FC = () => {
  return (
    <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div
          className={css`
            display: flex;
            width: 100vw;
            height: 100vh;
            background-color: whitesmoke;
          `}
        >
          <div
            className={css`
              display: flex;
              flex: none;
              flex-direction: column;
              width: 300px;
              padding: 24px;
              background-color: white;
              border-right: 1px solid rgb(0 0 0 / 10%);
            `}
          >
            <AppLogo />
            <Divider />
            <AppMenu />
          </div>

          <div
            className={css`
              flex: auto;
              padding: 24px;
              background-color: white;
            `}
          >
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
};
