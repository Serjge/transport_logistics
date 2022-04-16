import { LatLngLiteral } from 'leaflet';

import { PointType } from 'type';

export const CHANGE_WAREHOUSE = 'APP/CHANGE_WAREHOUSE';
export const SET_ROUTS = 'APP/SET_ROUTS';
export const SET_ROUT = 'APP/SET_ROUT';
export const IS_ACTIVE_ROUT = 'APP/IS_ACTIVE_ROUT';

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

export const setRouts = (orderId: string, routs: LatLngLiteral[]) =>
  ({
    type: SET_ROUTS,
    payload: {
      routs,
      orderId,
    },
  } as const);

export const setRout = (orderId: string, from: LatLngLiteral, to: LatLngLiteral) =>
  ({
    type: SET_ROUT,
    payload: {
      from,
      to,
      orderId,
    },
  } as const);

export const isActiveRout = (orderId: string, isActive: boolean) =>
  ({
    type: IS_ACTIVE_ROUT,
    payload: {
      isActive,
      orderId,
    },
  } as const);
