import { ReactElement } from 'react';

import { TileLayer, useMap } from 'react-leaflet';
import { useSelector } from 'react-redux';

import { selectIsResize } from 'store/selectors';

export const Map = (): ReactElement => {
  const isResize = useSelector(selectIsResize);

  const map = useMap();

  if (!isResize) {
    map.invalidateSize();
  }

  return (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
};
