import { ReactElement } from 'react';

import { LatLngLiteral } from 'leaflet';
import { Popup, Marker } from 'react-leaflet';

export const Mark = ({ lng, lat }: LatLngLiteral): ReactElement => (
  <Marker position={{ lng, lat }}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
);
