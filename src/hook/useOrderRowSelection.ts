import { Key } from 'react';

import { useSelector } from 'react-redux';

import { useActions } from 'hook';
import { selectOrders, selectWarehouses } from 'store/selectors';
import { getPointWarehouse } from 'utils';

type UseOrderRowSelectionReturnType = { onChange: (selectedRowKeys: Key[]) => void };

export const useOrderRowSelection = (): UseOrderRowSelectionReturnType => {
  const { isActiveRout, fetchRout, setRoutes } = useActions();

  const warehouses = useSelector(selectWarehouses);
  const orders = useSelector(selectOrders);

  return {
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
};
