import { parse } from 'papaparse';
import { createContext, useState } from 'react';

import { FileData, fileData2ListData, listData2PieData } from './common';

export const Ctx = createContext<Partial<ReturnType<typeof useCtxInit>>>({});

export function useCtxInit() {
  const [fileText, setFileText] = useState('');
  const [currentMonth, setCurrentMonth] = useState<string>('');

  const fileData = parse(fileText, { header: true, skipEmptyLines: true }).data as FileData;

  const listData = fileData2ListData(fileData);

  const pieData = listData2PieData(listData, currentMonth);

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
