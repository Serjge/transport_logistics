import { Key, ReactElement } from 'react';

import { Table } from 'antd';
import { Resizable } from 're-resizable';
import { useSelector } from 'react-redux';

import { SelectWarehouse } from 'components';
import { PointType } from 'enum';
import { useActions } from 'hook';
import { selectOrders, selectWarehouses } from 'store/selectors';
import { getPointWarehouse } from 'utils';

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
  const { isActiveRout, fetchRout, setRoutes } = useActions();

  const orders = useSelector(selectOrders);
  const warehouses = useSelector(selectWarehouses);

  const dataSource: DataType[] = orders.map(
    ({ id, loadingWarehouseId, unloadingWarehouseId }) => ({
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
      id,
    }),
  );

  const rowSelection = {
    onChange: (selectedRowKeys: Key[]) => {
      orders.forEach(({ id, isActive, unloadingWarehouseId, loadingWarehouseId }) => {
        if (selectedRowKeys.includes(id) && !isActive) {
          const loadingWarehouse = getPointWarehouse(warehouses, loadingWarehouseId);
          const unloadingWarehouse = getPointWarehouse(warehouses, unloadingWarehouseId);

          isActiveRout(id, true);
          fetchRout(id, loadingWarehouse, unloadingWarehouse);
        }
        if (!selectedRowKeys.includes(id) && isActive) {
          isActiveRout(id, false);
          setRoutes(id, []);
        }
      });
    },
  };

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
