import type { FC } from "react";
import { MainLeft } from "./main-left";
import { MainRight } from "./main-right";

export const LayoutMain: FC = () => {
  return (
    <>
      <MainLeft />
      <MainRight />
    </>
  );
};
