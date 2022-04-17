import { FC } from 'react';

import { AppContainer, AppWrapper } from './style';

import { MapLeaflet, OrderTable } from 'components';

export const App: FC = () => (
  <AppWrapper>
    <h1>Transport logistics</h1>

    <AppContainer>
      <OrderTable />
      <MapLeaflet />
    </AppContainer>
  </AppWrapper>
);
