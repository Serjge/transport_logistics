import { FC } from 'react';

import { AppWrapper } from './style';

import { MapLeaflet } from 'components/mapLeaflet/MapLeaflet';

export const App: FC = () => (
  <AppWrapper>
    <h1>Transport logistics</h1>
    <MapLeaflet />
  </AppWrapper>
);
