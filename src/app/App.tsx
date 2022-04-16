import { FC, useEffect } from 'react';

import { LatLngLiteral } from 'leaflet';

import { AppWrapper } from './style';

import { API } from 'api';
import { MapLeaflet, OrderTable } from 'components';

const CENTER2: LatLngLiteral = { lng: 28.287, lat: 57.789439 };
const CENTER3: LatLngLiteral = { lng: 28.368302, lat: 57.809 };

export const App: FC = () => {
  useEffect(() => {
    API.getRoute(CENTER2, CENTER3).then(res => {
      console.log(res.data.route.legs);
    });
  });
  return (
    <AppWrapper>
      <h1>Transport logistics</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <OrderTable />
        <MapLeaflet />
      </div>
    </AppWrapper>
  );
};
