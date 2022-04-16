import { ReactElement } from 'react';

import L, { LatLngLiteral } from 'leaflet';
import { MapContainer, Polyline, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';

import { MapWrapper } from './style';

import { Mark } from 'components';
import { selectOrders } from 'store/selectors';
import './Map.css';

const CENTER: LatLngLiteral = { lng: 28.335607, lat: 57.837852 };
const CENTER2: LatLngLiteral = {
  lng: 28.287,
  lat: 57.789439,
};
// const CENTER3: LatLngLiteral = { lng: 28.29146, lat: 57.83511 };
L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';
const limeOptions = { color: 'lime' };

export const MapLeaflet = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const qwery = useSelector(selectOrders)[0].routs;
  return (
    <MapWrapper>
      <MapContainer center={CENTER} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Mark lat={CENTER3.lat} lng={CENTER3.lng} /> */}
        <Mark lat={CENTER2.lat} lng={CENTER2.lng} />
        <Polyline pathOptions={limeOptions} positions={qwery} />
      </MapContainer>
    </MapWrapper>
  );
};
