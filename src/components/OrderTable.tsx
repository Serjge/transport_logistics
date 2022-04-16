import { Key, ReactElement } from 'react';

import { Table } from 'antd';
import { useSelector } from 'react-redux';

import { SelectWarehouse } from 'components';
import { selectOrders } from 'store/selectors';

type DataType = {
  key: Key;
  id: string;
  loading: ReactElement;
  unloading: ReactElement;
};

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
  const orders = useSelector(selectOrders);

  const dataSource: DataType[] = orders.map(
    ({ id, loadingWarehouseId, unloadingWarehouseId }) => ({
      key: id,
      loading: (
        <SelectWarehouse
          warehouseId={loadingWarehouseId}
          orderId={id}
          pointType="loading"
        />
      ),
      unloading: (
        <SelectWarehouse
          warehouseId={unloadingWarehouseId}
          orderId={id}
          pointType="unloading"
        />
      ),
      id,
    }),
  );

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
