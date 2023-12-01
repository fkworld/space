import { lazy, LazyExoticComponent } from 'react';

export const ROUTES: Array<{
  path: string;
  component: LazyExoticComponent<() => JSX.Element>;
}> = [
  {
    path: 'home',
    component: lazy(() => import('@/pages/home')),
  },
  {
    path: 'color-tools',
    component: lazy(() => import('@/pages/color-tools')),
  },
];
