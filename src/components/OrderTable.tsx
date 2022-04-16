import { Key, ReactElement } from 'react';

import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { SelectWarehouse } from 'components';
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
