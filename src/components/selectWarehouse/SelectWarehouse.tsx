import { ReactElement } from 'react';

import { Select } from 'antd';
import { useSelector } from 'react-redux';

import { useActions } from 'hook/useActions';
import { RootReducerType } from 'store';
import { selectIsActive, selectWarehouses } from 'store/selectors';
import { PointType } from 'type';

const { Option } = Select;

type SelectWarehousePropsType = {
  warehouseId: string;
  orderId: string;
  pointType: PointType;
};

export const SelectWarehouse = ({
  warehouseId,
  pointType,
  orderId,
}: SelectWarehousePropsType): ReactElement => {
  const { changeWarehouse } = useActions();

  const warehouses = useSelector(selectWarehouses);
  const isActive = useSelector((state: RootReducerType) =>
    selectIsActive(state, orderId),
  );

  const handleChangeWarehouse = (e: string): void => {
    changeWarehouse(orderId, e, pointType);
  };

  const warehouse = warehouses.map(({ id, state, street, city }) => (
    <Option key={id} value={id}>
      {` ${street}, ${city}, ${state}`}
    </Option>
  ));

  return (
    <Select
      value={warehouseId}
      onChange={handleChangeWarehouse}
      style={{ width: 240 }}
      bordered={false}
      disabled={isActive}
    >
      {warehouse}
    </Select>
  );
};
