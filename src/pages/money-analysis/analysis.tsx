import { Pie } from "@ant-design/charts";
import { gray } from "@ant-design/colors";
import { Empty, Tag, Typography } from "antd";
import { FC, useContext } from "react";

import { sdMoney } from "@/components/standard-display/sd-money";

import { getKeyConfig, getOwnerConfig } from "./common";
import { Ctx } from "./ctx";

export const Analysis: FC = () => {
  const { currentMonth, pieData } = useContext(Ctx);

  return (
    <div>
      <Typography.Title level={3}>
        Analysis
        {!!currentMonth && <Tag color="blue">{currentMonth}</Tag>}
      </Typography.Title>

      {currentMonth && pieData ? (
        <div className="flex items-start gap-16">
          {[
            pieData.statisticPie,
            pieData.allPie,
            pieData.fyPie,
            pieData.lxqPie,
          ].map((item) => {
            return (
              <div key={item.title} className="flex-1">
                {item.title} - {sdMoney(item.sum)}
                <Pie
                  data={Object.entries(item.values).map(([type, value]) => {
                    return { type, value };
                  })}
                  className="vertical-start"
                  padding={0}
                  angleField="value"
                  colorField="type"
                  color={(v) => {
                    return (
                      getOwnerConfig(v.type)?.color ??
                      getKeyConfig(v.type)?.color ??
                      gray[5]
                    );
                  }}
                  label={{
                    type: "inner",
                    content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
                  }}
                  legend={false}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <Empty />
      )}
    </div>
  );
};
