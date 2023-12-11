import { Loader, Title } from '@mantine/core';
import type { FC } from 'react';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES } from '@/configs/routes';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      {ROUTES.map((config) => {
        return (
          <Route
            key={config.path}
            element={
              <>
                <Title order={2}>{config.path}</Title>
                <Suspense fallback={<Loader />}>
                  <config.component />
                </Suspense>
              </>
            }
            path={config.path}
          />
        );
      })}
      <Route
        element={<Navigate to="/home" />}
        path="/"
      />
    </Routes>
  );
};
