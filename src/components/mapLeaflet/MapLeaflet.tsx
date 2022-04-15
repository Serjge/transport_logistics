import { ReactElement } from 'react';

import L, { LatLngLiteral } from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import { MapWrapper } from 'components/mapLeaflet/style';
import './Map.css';

const CENTER: LatLngLiteral = { lng: 28.335607, lat: 57.837852 };

export const MapLeaflet = (): ReactElement => {
  L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';
  return (
    <MapWrapper>
      <MapContainer center={CENTER} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </MapWrapper>
  );
};
