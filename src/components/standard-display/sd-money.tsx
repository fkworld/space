import { Tag } from 'antd';
import { FC } from 'react';

export const SDMoney: FC<{
  value?: string | number;
}> = (props) => {
  const { value } = props;

  const valueNumber = Number(value);

  if (Number.isNaN(valueNumber)) {
    return <Tag>empty</Tag>;
  }

  return valueNumber.toLocaleString('zh-CN', { maximumFractionDigits: 0 });
};

export function sdMoney(value?: string | number): string | undefined {
  const valueNumber = Number(value);

  if (Number.isNaN(valueNumber)) return;

  return valueNumber.toLocaleString('zh-CN', { maximumFractionDigits: 0 });
}
