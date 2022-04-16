import { LatLngLiteral } from 'leaflet';

export type OrderType = {
  id: string;
  loadingWarehouseId: string;
  unloadingWarehouseId: string;
  routs: LatLngLiteral[];
  isActive: boolean;
};
