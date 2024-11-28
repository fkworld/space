import type { FC } from "react";
import { Outlet } from "react-router";

export const MainRight: FC = () => {
  return (
    <div className="ml-64 min-h-screen bg-b3 p-4">
      <Outlet />
    </div>
  );
};
