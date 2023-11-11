import { Typography } from 'antd';
import { FC } from 'react';

import { APP_NAME } from '@/configs/app';

export const AppLogo: FC = () => {
  return <Typography.Title level={1}>{APP_NAME}</Typography.Title>;
};
