import { LatLngLiteral } from 'leaflet';

import { ZERO_ELEMENT_ARRAY } from 'const';
import { WarehouseType } from 'type';

export const getPointWarehouse = (
  warehouses: WarehouseType[],
  warehouseId: string,
): LatLngLiteral =>
  warehouses.filter(({ id }) => id === warehouseId)[ZERO_ELEMENT_ARRAY].point;
