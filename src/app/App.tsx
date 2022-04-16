import { FC } from 'react';

import { useDispatch } from 'react-redux';

import { AppWrapper } from './style';

import { MapLeaflet, OrderTable } from 'components';

export const App: FC = () => {
  const dispatch = useDispatch();

  const onClick = (): void => {
    dispatch({ type: 'CLICK' });
  };
  return (
    <AppWrapper>
      <h1>Transport logistics</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <OrderTable />
        <MapLeaflet />
        <button type="button" onClick={onClick}>
          set
        </button>
      </div>
    </AppWrapper>
  );
};
