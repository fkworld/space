import { Button, Table, Tag, Typography } from 'antd';
import { useContext } from 'react';

import { SDMoney } from '@/components/standard-display/sd-money';

import { getOwnerConfig, ListData } from './common';
import { Ctx } from './ctx';

export function List() {
  const { listData, setCurrentMonth, setFileText } = useContext(Ctx);

  return (
    <div>
      <Typography.Title level={3}>List</Typography.Title>
      <Button
        type="primary"
        onClick={async () => {
          const [fileHandle] = await window.showOpenFilePicker({
            types: [{ accept: { 'text/csv': ['.csv'] } }],
          });
          const file = await fileHandle.getFile();
          const text = await file.text();
          setFileText?.(text);
        }}
      >
        读取本地 CSV 文件
      </Button>
      <Table<ListData[number]>
        columns={[
          {
            dataIndex: 'time',
            title: 'time',
            fixed: true,
            render: (_, record) => <Tag>{record.time}</Tag>,
          },
          {
            dataIndex: 'owner',
            title: 'owner',
            fixed: true,
            render: (_, record) => {
              return getOwnerConfig(record.owner)?.tag ?? <Tag color="error">{record.owner}</Tag>;
            },
          },
          {
            dataIndex: 'total',
            title: 'total',
            fixed: true,
            render: (_, record) => <SDMoney value={record.total} />,
          },
          {
            dataIndex: 'cash',
            title: 'cash',
            render: (_, record) => <SDMoney value={record.cash} />,
          },
          {
            dataIndex: 'bankSavings',
            title: 'bankSavings',
            render: (_, record) => <SDMoney value={record.bankSavings} />,
          },
          {
            dataIndex: 'investment',
            title: 'investment',
            render: (_, record) => <SDMoney value={record.investment} />,
          },
          {
            dataIndex: 'housingFund',
            title: 'housingFund',
            render: (_, record) => <SDMoney value={record.housingFund} />,
          },
        ]}
        dataSource={listData}
        rowKey={(record) => `${record.time}_${record.owner}`}
        rowSelection={{
          type: 'radio',
          onChange: (_, selectedRows) => {
            setCurrentMonth?.(selectedRows[0].time);
          },
        }}
        scroll={{ x: true }}
      />
    </div>
  );
}
