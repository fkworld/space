import { MantineProvider } from "@mantine/core";
import type { FC } from "react";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import { router } from "./router";

export const App: FC = () => {
  return (
    <StrictMode>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </StrictMode>
  );
};
