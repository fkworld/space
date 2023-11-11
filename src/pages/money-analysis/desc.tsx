import { Typography } from "antd";
import { FC } from "react";

export const Desc: FC = () => {
  return (
    <div>
      <Typography.Title level={2}>Money Analysis</Typography.Title>
      <Typography.Paragraph>用于个人及家庭资产统计。主要包括以下概念：</Typography.Paragraph>
      <Typography.Paragraph>
        <ul>
          <li>所有者 - owner</li>
          <li>现金 - cash</li>
          <li>银行存款 - bankSavings</li>
          <li>投资 - investment</li>
          <li>住房公积金 - housingFund</li>
        </ul>
      </Typography.Paragraph>
    </div>
  );
};
