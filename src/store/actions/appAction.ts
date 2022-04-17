import { LatLngLiteral } from 'leaflet';

import { PointType } from 'type';

export const SET_ERROR = 'APP/SET_ERROR';
export const SET_ROUTES = 'APP/SET_ROUTES';
export const FETCH_ROUT = 'APP/FETCH_ROUT';
export const IS_ACTIVE_ROUT = 'APP/IS_ACTIVE_ROUT';
export const CHANGE_WAREHOUSE = 'APP/CHANGE_WAREHOUSE';

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

export const setRoutes = (orderId: string, routes: LatLngLiteral[]) =>
  ({
    type: SET_ROUTES,
    payload: {
      routs: routes,
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

export const setError = (error: string | null) =>
  ({
    type: SET_ERROR,
    payload: {
      error,
    },
  } as const);

// saga
export const fetchRout = (orderId: string, from: LatLngLiteral, to: LatLngLiteral) =>
  ({
    type: FETCH_ROUT,
    payload: {
      orderId,
      from,
      to,
    },
  } as const);
