import { blue, gold, green, red } from "@ant-design/colors";
import { Tag } from "antd";
import { chain } from "lodash";
import { ReactNode } from "react";

export type FileData = Array<{
  time: string;
  owner: string;
  cash: string;
  bankSavings: string;
  investment: string;
  housingFund: string;
}>;

export type ListData = Array<
  FileData[number] & {
    total: number;
  }
>;

export type PieData = {
  statistic: {
    total: number;
    totalFy: number;
    totalLxq: number;
  };
  statisticPie: {
    title: "statistic";
    sum: number;
    values: {
      fy: number;
      lxq: number;
    };
  };
  allPie: {
    title: "all";
    sum: number;
    values: {
      cash: number;
      bankSavings: number;
      investment: number;
      housingFund: number;
    };
  };
  fyPie: {
    title: "fy";
    sum: number;
    values: {
      cash: number;
      bankSavings: number;
      investment: number;
      housingFund: number;
    };
  };
  lxqPie: {
    title: "lxq";
    sum: number;
    values: {
      cash: number;
      bankSavings: number;
      investment: number;
      housingFund: number;
    };
  };
};

export function fileData2ListData(fileData: FileData): ListData {
  return fileData.map((v) => {
    return {
      ...v,
      total: chain(v)
        .pick(["cash", "bankSavings", "investment", "housingFund"])
        .values()
        .map((v) => Number(v) ?? 0)
        .sum()
        .value(),
    };
  });
}

export function listData2PieData(listData: ListData, currentMonth: string): PieData {
  const fySource = listData.find((v) => v.time === currentMonth && v.owner === "fy");
  const lxqSource = listData.find((v) => v.time === currentMonth && v.owner === "lxq");

  const fy = {
    cash: Number(fySource?.cash) ?? 0,
    bankSavings: Number(fySource?.bankSavings) ?? 0,
    investment: Number(fySource?.investment) ?? 0,
    housingFund: Number(fySource?.housingFund) ?? 0,
  };
  const lxq = {
    cash: Number(lxqSource?.cash) ?? 0,
    bankSavings: Number(lxqSource?.bankSavings) ?? 0,
    investment: Number(lxqSource?.investment) ?? 0,
    housingFund: Number(lxqSource?.housingFund) ?? 0,
  };
  const all = {
    cash: fy.cash + lxq.cash,
    bankSavings: fy.bankSavings + lxq.bankSavings,
    investment: fy.investment + lxq.investment,
    housingFund: fy.housingFund + lxq.housingFund,
  };
  const statistic = {
    total: all.cash + all.bankSavings + all.investment + all.housingFund,
    totalFy: fy.cash + fy.bankSavings + fy.investment + fy.housingFund,
    totalLxq: lxq.cash + lxq.bankSavings + lxq.investment + lxq.housingFund,
  };

  return {
    statistic,
    statisticPie: {
      title: "statistic",
      sum: statistic.total,
      values: { fy: statistic.totalFy, lxq: statistic.totalLxq },
    },
    allPie: {
      title: "all",
      sum: statistic.total,
      values: all,
    },
    fyPie: {
      title: "fy",
      sum: statistic.totalFy,
      values: fy,
    },
    lxqPie: {
      title: "lxq",
      sum: statistic.totalLxq,
      values: lxq,
    },
  };
}

export function getOwnerConfig(owner?: string):
  | {
      tag: ReactNode;
      color: string;
    }
  | undefined {
  switch (owner) {
    case "fy":
      return {
        tag: <Tag color="blue">fy</Tag>,
        color: blue[5],
      };
    case "lxq":
      return {
        tag: <Tag color="gold">lxq</Tag>,
        color: gold[5],
      };
  }
}

export function getKeyConfig(key?: string):
  | {
      color: string;
    }
  | undefined {
  switch (key) {
    case "cash":
      return { color: green[5] };
    case "bankSavings":
      return { color: green[3] };
    case "investment":
      return { color: red[5] };
    case "housingFund":
      return { color: red[3] };
  }
}
