import { Divider } from 'antd';
import { FC, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppLogo } from './app-logo';
import { AppMenu } from './app-menu';
import { AppRoutes } from './app-routes';

export const App: FC = () => {
  return (
    <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="h-screen w-screen flex">
          <div className="w-300px flex flex-none flex-col border-r-1 border-r-black/10 border-r-solid p-6">
            <AppLogo />
            <Divider />
            <AppMenu />
          </div>

          <div className="flex-1 overflow-x-hidden overflow-y-scroll p-6">
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </StrictMode>
  );
};
