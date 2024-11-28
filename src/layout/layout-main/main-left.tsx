import { navigateTo, router } from "@/app/router";
import { APP_HOMEPAGE } from "@/configs/app";
import { IconBrandGithub } from "@tabler/icons-react";
import type { FC } from "react";

export const MainLeft: FC = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 w-64 bg-white p-4">
      <div className="font-medium text-size-h1">fkworld</div>

      <div className="my-2 h-px bg-b12" />

      <IconBrandGithub onClick={() => window.open(APP_HOMEPAGE, "__blank")} />

      <div className="my-2 h-px bg-b12" />

      {router.routes[0].children?.map((route) => {
        return (
          <div
            key={route.path}
            className="underline"
            onClick={() => navigateTo(`/${route.path}`)}
          >
            {route.path}
          </div>
        );
      })}
    </div>
  );
};
