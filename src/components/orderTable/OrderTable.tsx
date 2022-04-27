import { Key, ReactElement } from 'react';

import { Table } from 'antd';
import { Resizable } from 're-resizable';
import { useSelector } from 'react-redux';

import { SelectWarehouse } from 'components';
import { PointType } from 'enum';
import { useOrderRowSelection } from 'hook';
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
    dataIndex: PointType.loading,
    key: PointType.loading,
  },
  {
    title: 'Unloading place',
    dataIndex: PointType.unloading,
    key: PointType.unloading,
  },
];

export const OrderTable = (): ReactElement => {
  const orders = useSelector(selectOrders);

  const rowSelection = useOrderRowSelection();

  const dataSource: DataType[] = orders.map(
    ({ id, loadingWarehouseId, unloadingWarehouseId }) => ({
      id,
      key: id,
      loading: (
        <SelectWarehouse
          warehouseId={loadingWarehouseId}
          orderId={id}
          pointType={PointType.loading}
        />
      ),
      unloading: (
        <SelectWarehouse
          warehouseId={unloadingWarehouseId}
          orderId={id}
          pointType={PointType.unloading}
        />
      ),
    }),
  );

  return (
    <Resizable
      defaultSize={{
        width: '50%',
        height: '100%',
      }}
      maxWidth="100%"
      minWidth="50px"
    >
      <Table
        scroll={{ x: 400 }}
        dataSource={dataSource}
        columns={columns}
        rowSelection={rowSelection}
        pagination={{ pageSize: 10 }}
      />
    </Resizable>
  );
};
