import { ReactElement } from 'react';

import { MapContainer } from 'react-leaflet';
import { useSelector } from 'react-redux';

import './Map.css';
import { MapWrapper } from './style';

import { MotionTrack, Map, PutMark } from 'components';
import { selectCenterMap, selectOrders, selectZoom } from 'store/selectors';

export const MapLeaflet = (): ReactElement => {
  const zoom = useSelector(selectZoom);
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
      <MapContainer center={centerMap} zoom={zoom}>
        {motionTrack}
        <Map />
        <PutMark />
      </MapContainer>
    </MapWrapper>
  );
};
