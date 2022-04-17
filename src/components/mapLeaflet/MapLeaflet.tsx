import { ReactElement } from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';

import { MapWrapper } from './style';

import './Map.css';
import { MotionTrack } from 'components';
import { selectCenterMap, selectOrders } from 'store/selectors';

export const MapLeaflet = (): ReactElement => {
  const orders = useSelector(selectOrders);
  const centerMap = useSelector(selectCenterMap);

  const motionTrack = orders.map(({ id, isActive }) => {
    if (!isActive) {
      return null;
    }
    return <MotionTrack key={id} orderId={id} />;
  });

  return (
    <MapWrapper>
      <MapContainer center={centerMap} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {motionTrack}
      </MapContainer>
    </MapWrapper>
  );
};
