import { NavLink } from '@mantine/core';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/configs/routes';

export const AppMenu: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {ROUTES.map((item) => {
        return (
          <NavLink
            key={item.path}
            label={item.path}
            onClick={() => navigate(item.path)}
          />
        );
      })}
    </div>
  );
};
