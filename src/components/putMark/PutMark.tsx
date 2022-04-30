import { ReactElement } from 'react';

import { Marker, Popup, useMapEvent } from 'react-leaflet';
import { useSelector } from 'react-redux';

import { useActions } from 'hook';
import { selectMapMark } from 'store/selectors';

export const PutMark = (): ReactElement | null => {
  const { fetchAddress } = useActions();

  const mapMark = useSelector(selectMapMark);

  useMapEvent('click', e => {
    fetchAddress(e.latlng);
  });

  if (mapMark === null) {
    return null;
  }

  const { latLng, adminArea5, adminArea1, street } = mapMark;

  return (
    <Marker position={latLng}>
      <Popup>{`${street} ${adminArea5} ${adminArea1}.`}</Popup>
    </Marker>
  );
};
