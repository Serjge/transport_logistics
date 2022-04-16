import { LatLngLiteral } from 'leaflet';

export type OrderType = {
  id: string;
  loadingWarehouseId: string;
  unloadingWarehouseId: string;
  routes: LatLngLiteral[];
  isActive: boolean;
  color: string;
};
