/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Key, ReactElement, useState } from 'react';

import { Table, Select } from 'antd';

const { Option } = Select;

interface DataType {
  key: Key;
  loading: ReactElement;
  id: string;
  unloading: ReactElement;
}

const warehouses: WarehouseType[] = [
  {
    id: '1',
    city: 'Псков',
    state: 'ру',
    street: 'Труда 20',
  },
  {
    id: '2',
    city: 'Псков',
    state: 'ру',
    street: 'Инженерная 12',
  },
  {
    id: '3',
    city: 'Псков',
    state: 'ру',
    street: 'Шосейная 3',
  },
  {
    id: '4',
    city: 'Псков',
    state: 'ру',
    street: 'Рокосовскаго 16',
  },
];

export const Order = ({ selectId }: { selectId: string }): ReactElement => {
  const [qwerty, setQwerty] = useState<string>(selectId);
  console.log(qwerty);
  return (
    <div>
      <Select
        value={qwerty}
        onChange={e => setQwerty(e)}
        defaultValue={warehouses[0].id}
        style={{ width: 240 }}
        bordered={false}
      >
        {warehouses.map(({ id, state, street, city }) => (
          <Option key={id} value={id}>
            {` ${street}, ${city}, ${state}`}
          </Option>
        ))}
      </Select>
    </div>
  );
};

interface QweType {
  loading: string;
  id: string;
  unloading: string;
}

const qwe: QweType[] = [
  {
    id: '1',
    loading: '3',
    unloading: '2',
  },
  {
    id: '2',
    loading: '4',
    unloading: '1',
  },
  {
    id: '3',
    loading: '2',
    unloading: '4',
  },
  {
    id: '4',
    loading: '1',
    unloading: '3',
  },
];
const dataSource: DataType[] = qwe.map(({ id, loading, unloading }) => ({
  key: id,
  loading: <Order selectId={loading} />,
  unloading: <Order selectId={unloading} />,
  id,
}));

const columns = [
  {
    title: 'Loading place',
    dataIndex: 'loading',
    key: 'loading',
  },
  {
    title: 'Unloading place',
    dataIndex: 'unloading',
    key: 'unloading',
  },
];

type WarehouseType = {
  id: string;
  state: string;
  city: string;
  street: string;
};

export const OrderTable = (): ReactElement => {
  const rowSelection = {
    onChange: (selectedRowKeys: Key[], selectedRows: DataType[]) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };
  return (
    <div style={{ width: '40vw', marginTop: '50px' }}>
      <Table
        dataSource={dataSource}
        pagination={false}
        columns={columns}
        rowSelection={rowSelection}
      />
    </div>
  );
};
