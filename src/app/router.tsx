import { LayoutMain } from "@/layout/layout-main/layout-main";
import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: LayoutMain,
      children: [
        {
          path: "",
          element: <Navigate to="/home" />,
        },
        {
          path: "home",
          Component: lazy(() => import("@/pages/home")),
        },
        {
          path: "color-tools",
          Component: lazy(() => import("@/pages/color-tools")),
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

export function navigateTo(path: string) {
  router.navigate(path);
}
