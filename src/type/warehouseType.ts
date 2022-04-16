import { LatLngLiteral } from 'leaflet';

export type WarehouseType = {
  id: string;
  state: string;
  city: string;
  street: string;
  point: LatLngLiteral;
};
