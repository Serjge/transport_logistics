import { ReactElement } from 'react';

import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { changeWarehouse } from 'store/actions';
import { selectWarehouses } from 'store/selectors';
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
  const dispatch = useDispatch();

  const warehouses = useSelector(selectWarehouses);

  const handleChangeWarehouse = (e: string): void => {
    dispatch(changeWarehouse(orderId, e, pointType));
  };

  return (
    <Select
      value={warehouseId}
      onChange={handleChangeWarehouse}
      style={{ width: 240 }}
      bordered={false}
    >
      {warehouses.map(({ id, state, street, city }) => (
        <Option key={id} value={id}>
          {` ${street}, ${city}, ${state}`}
        </Option>
      ))}
    </Select>
  );
};
