import { Loader } from '@mantine/core';
import { FC, Suspense } from 'react';
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
                <div className="mb-16">{config.path}</div>
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
