import { ReactElement, useState } from 'react';

import { LatLngExpression } from 'leaflet';
import { Marker, Popup, useMapEvent } from 'react-leaflet';
import { useSelector } from 'react-redux';

import { useActions } from 'hook';
import { selectMapMark } from 'store/selectors';

export const PutMark = (): ReactElement => {
  const [point, setPoint] = useState<LatLngExpression | null>(null);
  const { fetchAddress } = useActions();

  const mapMark = useSelector(selectMapMark);

  useMapEvent('click', e => {
    setPoint(e.latlng);
    fetchAddress(e.latlng);
  });

  return (
    <div>
      {point && (
        <Marker position={point}>
          <Popup>
            {`${mapMark?.street} ${mapMark?.adminArea5} ${mapMark?.adminArea1}`}.
          </Popup>
        </Marker>
      )}
    </div>
  );
};
