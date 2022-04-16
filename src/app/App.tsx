import { FC } from 'react';

import { AppWrapper } from './style';

import { MapLeaflet, OrderTable } from 'components';

export const App: FC = () => (
  <AppWrapper>
    <h1>Transport logistics</h1>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <OrderTable />
      <MapLeaflet />
    </div>
  </AppWrapper>
);
