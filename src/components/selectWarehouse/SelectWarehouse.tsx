import { ReactElement, useState } from 'react';

import { Select } from 'antd';
import { useSelector } from 'react-redux';

import { selectWarehouses } from 'store/selectors';

const { Option } = Select;

const FIRST_ELEMENT_ARRAY = 0;

export const SelectWarehouse = ({ selectId }: { selectId: string }): ReactElement => {
  const [qwerty, setQwerty] = useState<string>(selectId);

  const warehouses = useSelector(selectWarehouses);

  return (
    <Select
      value={qwerty}
      onChange={e => setQwerty(e)}
      defaultValue={warehouses[FIRST_ELEMENT_ARRAY].id}
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
