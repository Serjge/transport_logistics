import { Key, ReactElement } from 'react';

import { Table } from 'antd';
import { Resizable } from 're-resizable';
import { useDispatch, useSelector } from 'react-redux';

import { SelectWarehouse } from 'components/index';
import { isActiveRout, setRout } from 'store/actions';
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
  const dispatch = useDispatch();

  const orders = useSelector(selectOrders);
  const warehouses = useSelector(selectWarehouses);

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
    onChange: (selectedRowKeys: Key[]) => {
      orders.forEach(({ id, isActive, unloadingWarehouseId, loadingWarehouseId }) => {
        if (selectedRowKeys.includes(id) && !isActive) {
          const loadingWarehouse = getPointWarehouse(warehouses, loadingWarehouseId);
          const unloadingWarehouse = getPointWarehouse(warehouses, unloadingWarehouseId);

          dispatch(isActiveRout(id, true));
          dispatch(setRout(id, loadingWarehouse, unloadingWarehouse));
        }
        if (!selectedRowKeys.includes(id) && isActive) {
          dispatch(isActiveRout(id, false));
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
