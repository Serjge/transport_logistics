import { Key } from 'react';

import { useSelector } from 'react-redux';

import { useActions } from 'hook';
import { selectOrders } from 'store/selectors';

type UseOrderRowSelectionReturnType = { onChange: (selectedRowKeys: Key[]) => void };

export const useOrderRowSelection = (): UseOrderRowSelectionReturnType => {
  const { isActiveRout, fetchRout, setRoutes } = useActions();

  const orders = useSelector(selectOrders);

  return {
    onChange: (selectedRowKeys: Key[]) => {
      orders.forEach(({ id, isActive }) => {
        if (selectedRowKeys.includes(id) && !isActive) {
          isActiveRout(id, true);
          fetchRout(id);
        }
        if (!selectedRowKeys.includes(id) && isActive) {
          isActiveRout(id, false);
          setRoutes(id, []);
        }
      });
    },
  };
};
