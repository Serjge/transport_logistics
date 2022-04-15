import { FC } from 'react';

import { AppWrapper } from './style';

import { MapLeaflet } from 'components/mapLeaflet/MapLeaflet';
import { OrderTable } from 'components/OrderTable';

export const App: FC = () => (
  <AppWrapper>
    <h1>Transport logistics</h1>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <OrderTable />
      <MapLeaflet />
    </div>
  </AppWrapper>
);
