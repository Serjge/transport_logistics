import { ReactElement } from 'react';

import { LatLngLiteral } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';

import { MapWrapper } from './style';

import './Map.css';
import { MotionTrack } from 'components';
import { selectOrders } from 'store/selectors';

const CENTER: LatLngLiteral = { lng: 28.332645, lat: 57.819312 };

export const MapLeaflet = (): ReactElement => {
  const orders = useSelector(selectOrders);

  const motionTrack = orders.map(({ id, isActive }) => {
    if (!isActive) {
      return null;
    }
    return <MotionTrack key={id} orderId={id} />;
  });

  return (
    <MapWrapper>
      <MapContainer center={CENTER} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {motionTrack}
      </MapContainer>
    </MapWrapper>
  );
};
