import { ReactElement, useState } from 'react';

import { LatLngExpression } from 'leaflet';
import { Marker, Popup, useMapEvent } from 'react-leaflet';

import { useActions } from 'hook';

export const PutMark = (): ReactElement => {
  const [point, setPoint] = useState<LatLngExpression | null>(null);
  const { fetchAddress } = useActions();

  useMapEvent('click', e => {
    setPoint(e.latlng);
    fetchAddress(e.latlng);
  });

  return (
    <div>
      {point && (
        <Marker position={point}>
          <Popup>{` ${point}`}.</Popup>
        </Marker>
      )}
    </div>
  );
};
