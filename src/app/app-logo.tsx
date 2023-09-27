import { FC } from "react";

import { APP_NAME } from "@/configs/app";

export const AppLogo: FC = () => {
  return (
    <div className="text-size-4xl">
      {APP_NAME}
      {"'s space"}
    </div>
  );
};
