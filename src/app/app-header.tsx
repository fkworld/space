import { Button, Title, Tooltip } from '@mantine/core';
import { IconBrandGithub, IconPlanet, IconRocket } from '@tabler/icons-react';
import type { FC } from 'react';

import { APP_HOMEPAGE, APP_VERSION } from '@/configs/app';

export const AppHeader: FC = () => {
  return (
    <div className="flex h-full items-center gap-16">
      <IconPlanet size={64} />

      <Title className="flex-1">fkworld space</Title>

      <Tooltip label={__APP_COMMIT_DATE__}>
        <Button
          leftSection={<IconRocket />}
          variant="light"
        >
          {APP_VERSION}
        </Button>
      </Tooltip>

      <Tooltip
        label={APP_HOMEPAGE}
        position="bottom-end"
      >
        <Button
          component="a"
          href={APP_HOMEPAGE}
          leftSection={<IconBrandGithub />}
          target="_blank"
          variant="light"
        >
          Github
        </Button>
      </Tooltip>
    </div>
  );
};
