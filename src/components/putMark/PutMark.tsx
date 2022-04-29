import { ReactElement, useState } from 'react';

import { LatLngExpression } from 'leaflet';
import { Marker, Popup, useMapEvent } from 'react-leaflet';

export const PutMark = (): ReactElement => {
  const [point, setPoint] = useState<LatLngExpression | null>(null);

  useMapEvent('click', e => {
    setPoint(e.latlng);
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
