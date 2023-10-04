import { parse } from "papaparse";
import { createContext, useMemo, useState } from "react";

import { FileData, fileData2ListData, listData2PieData } from "./common";

export const Ctx = createContext<Partial<ReturnType<typeof useCtxInit>>>({});

export function useCtxInit() {
  const [fileText, setFileText] = useState("");
  const [currentMonth, setCurrentMonth] = useState<string>("");

  const fileData = useMemo(() => {
    const { data } = parse(fileText, { header: true, skipEmptyLines: true });
    return data as FileData;
  }, [fileText]);

  const listData = useMemo(() => fileData2ListData(fileData), [fileData]);

  const pieData = useMemo(
    () => listData2PieData(listData, currentMonth),
    [listData, currentMonth],
  );

  return {
    fileText,
    setFileText,
    currentMonth,
    setCurrentMonth,
    fileData,
    listData,
    pieData,
  };
}
