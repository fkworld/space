import { FC, lazy } from 'react';

export const ROUTES: Array<{
  path: string;
  component: FC;
  isMenu?: boolean;
}> = [
  {
    path: 'home',
    component: lazy(() => import('@/pages/home')),
    isMenu: true,
  },
  {
    path: 'money-analysis',
    component: lazy(() => import('@/pages/money-analysis')),
    isMenu: true,
  },
  {
    path: 'color-tools',
    component: lazy(() => import('@/pages/color-tools')),
    isMenu: true,
  },
];

export function displayRoutePath(path: string) {
  return path
    .split('-')
    .map((v) => v[0].toUpperCase() + v.slice(1))
    .join(' ');
}
