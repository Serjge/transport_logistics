import { LatLngLiteral } from 'leaflet';

import { PointType } from 'type';

export const CHANGE_WAREHOUSE = 'APP/CHANGE_WAREHOUSE';
export const SET_ROUTS = 'APP/SET_ROUTS';

export const changeWarehouse = (
  orderId: string,
  warehouseId: string,
  pointType: PointType,
) =>
  ({
    type: CHANGE_WAREHOUSE,
    payload: {
      orderId,
      warehouseId,
      pointType,
    },
  } as const);

export const setRouts = (routs: LatLngLiteral[]) =>
  ({
    type: SET_ROUTS,
    payload: {
      routs,
    },
  } as const);
