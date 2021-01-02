import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Token',
    dataIndex: 'name',
    width: 300,
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    width: 300
  }
];

const TableOfTakens = ({result}) => {
  const data = [
    {
    key: '1',
    name: 'USD Coin (USDC)',
    balance:  Number(result.USDC/Math.pow(10,6)).toLocaleString()
    },
    {
    key: '2',
    name: 'Tether USD (USDT)',
    balance:  Number(result.USDT/1000000)
    },
    {
    key: '3',
    name: 'IDKToken (IDK)',
    balance:  Number(result.IDK/100000000)
    },
    {
    key: '4',
    name: 'KickToken (KICK)',
    balance:  Number(result.KICK/Math.pow(10,8)).toLocaleString()
    },
    {
    key: '5',
    name: 'Sai Stablecoin (SAI)',
    balance:  Number(result.SAI)/Math.pow(10,18)
    },
    {
    key: '6',
    name: 'Livepeer Token (LPT)',
    balance:  Number(result.LPT/Math.pow(10,18)).toFixed(8)
    },
    {
    key: '7',
    name: 'LoopringCoin (LRC)',
    balance: Number(result.LRC/Math.pow(10,18))
    },
    {
    key: '8',
    name: 'HEX (HEX)',
    balance:  Number(result.HEX/100000000)
    },
    {
    key: '9',
    name: 'Ebakus (EBK)',
    balance:  Number(result.EBK/Math.pow(10,18))
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} size="medium" bordered="true" />
    </>
  );
};

export default TableOfTakens;
