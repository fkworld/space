import { FC, lazy } from "react";

export const ROUTES: Array<{
  path: string;
  component: FC;
  isMenu?: boolean;
}> = [
  {
    path: "home",
    component: lazy(() => import("@/pages/home")),
    isMenu: true,
  },
  {
    path: "money-analysis",
    component: lazy(() => import("@/pages/money-analysis")),
    isMenu: true,
  },
];
