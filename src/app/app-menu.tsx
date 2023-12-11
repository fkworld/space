import { NavLink } from '@mantine/core';
import type { FC } from 'react';

import { ROUTES } from '@/configs/routes';

export const AppMenu: FC = () => {
  return (
    <div className="flex flex-col">
      {ROUTES.map((item) => {
        return (
          <NavLink
            key={item.path}
            href={item.path}
            label={item.path}
          />
        );
      })}
    </div>
  );
};
