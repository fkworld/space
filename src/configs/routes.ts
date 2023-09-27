import { FC, lazy } from "react";

export const ROUTES: Array<{ path: string; component: FC }> = [
  {
    path: "/home",
    component: lazy(() => import("@/pages/home")),
  },
];
