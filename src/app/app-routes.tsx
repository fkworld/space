import { Result, Skeleton } from 'antd';
import { FC, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { ROUTES } from '@/configs/routes';

export const AppRoutes: FC = () => {
  const element = useRoutes([
    ...ROUTES.map((config) => {
      return {
        path: config.path,
        element: (
          <Suspense fallback={<Skeleton active />}>
            <config.component />
          </Suspense>
        ),
      };
    }),
    { path: '/403', element: <Route403 /> },
    { path: '/404', element: <Route404 /> },
    { path: '/', element: <Navigate to="/home" /> },
    { path: '*', element: <Route404 /> },
  ]);

  return element;
};

const Route403: FC = () => {
  return <Result status="403" title="403" />;
};

const Route404: FC = () => {
  return <Result status="404" title="404" />;
};
