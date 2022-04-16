import { Key, ReactElement } from 'react';

import { Table } from 'antd';

import { SelectWarehouse } from 'components';

interface DataType {
  key: Key;
  loading: ReactElement;
  id: string;
  unloading: ReactElement;
}

interface QweType {
  id: string;
  loadingWarehouseId: string;
  unloadingWarehouseId: string;
}

const qwe: QweType[] = [
  {
    id: '1',
    loadingWarehouseId: '3',
    unloadingWarehouseId: '2',
  },
  {
    id: '2',
    loadingWarehouseId: '4',
    unloadingWarehouseId: '1',
  },
  {
    id: '3',
    loadingWarehouseId: '2',
    unloadingWarehouseId: '4',
  },
  {
    id: '4',
    loadingWarehouseId: '1',
    unloadingWarehouseId: '3',
  },
];
const dataSource: DataType[] = qwe.map(
  ({ id, loadingWarehouseId, unloadingWarehouseId }) => ({
    key: id,
    loading: <SelectWarehouse selectId={loadingWarehouseId} />,
    unloading: <SelectWarehouse selectId={unloadingWarehouseId} />,
    id,
  }),
);

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
