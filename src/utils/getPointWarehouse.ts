import { LatLngLiteral } from 'leaflet';

import { WarehouseType } from 'type';

const ZERO_ELEMENT_ARRAY = 0;

export const getPointWarehouse = (
  warehouses: WarehouseType[],
  warehouseId: string,
): LatLngLiteral =>
  warehouses.filter(({ id }) => id === warehouseId)[ZERO_ELEMENT_ARRAY].point;
