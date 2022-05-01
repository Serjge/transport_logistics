import { LatLngLiteral } from 'leaflet';

import { LocationAddressType } from 'api/type';
import { PointType } from 'type';

export const SET_ERROR = 'APP/SET_ERROR';
export const SET_ROUTES = 'APP/SET_ROUTES';
export const FETCH_ROUT = 'APP/FETCH_ROUT';
export const SET_MAP_MARK = 'APP/SET_MAP_MARK';
export const FETCH_ADDRESS = 'APP/FETCH_ADDRESS';
export const IS_RESIZE_MAP = 'APP/IS_RESIZE_MAP';
export const IS_ACTIVE_ROUT = 'APP/IS_ACTIVE_ROUT';
export const REMOVE_MAP_MARK = 'APP/REMOVE_MAP_MARK';
export const CHANGE_WAREHOUSE = 'APP/CHANGE_WAREHOUSE';
export const SET_NEW_WAREHOUSES = 'APP/SET_NEW_WAREHOUSES';

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

export const isResizeMap = (isResize: boolean) =>
  ({
    type: IS_RESIZE_MAP,
    payload: {
      isResize,
    },
  } as const);

export const setMapMark = (location: LocationAddressType) =>
  ({
    type: SET_MAP_MARK,
    payload: {
      location,
    },
  } as const);

export const setNewWarehouses = (
  city: string,
  street: string,
  state: string,
  point: LatLngLiteral,
) =>
  ({
    type: SET_NEW_WAREHOUSES,
    payload: {
      city,
      street,
      state,
      point,
    },
  } as const);

export const removeMapMark = () =>
  ({
    type: REMOVE_MAP_MARK,
  } as const);

// saga
export const fetchRout = (orderId: string) =>
  ({
    type: FETCH_ROUT,
    payload: {
      orderId,
    },
  } as const);

export const fetchAddress = (location: LatLngLiteral) =>
  ({
    type: FETCH_ADDRESS,
    payload: {
      location,
    },
  } as const);
