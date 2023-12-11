import { MantineProvider } from '@mantine/core';
import type { FC } from 'react';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppHeader } from './app-header';
import { AppMenu } from './app-menu';
import { AppRoutes } from './app-routes';

export const App: FC = () => {
  return (
    <StrictMode>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <MantineProvider>
          <div className="flex h-screen w-screen flex-col ">
            <div className="h-64 flex-none bg-gray-100 px-16">
              <AppHeader />
            </div>

            <div className="flex flex-1">
              <div className="w-256 flex-none bg-gray-100">
                <AppMenu />
              </div>

              <div className="flex-1 overflow-x-hidden overflow-y-scroll bg-gray-200 p-16">
                <AppRoutes />
              </div>
            </div>
          </div>
        </MantineProvider>
      </BrowserRouter>
    </StrictMode>
  );
};
