import {
  changeWarehouse,
  isActiveRout,
  setRoutes,
  fetchRout,
  setError,
  isResizeMap,
} from 'store/actions';

export type AppActionsType =
  | SetRoutsType
  | SetErrorType
  | FetchRoutType
  | IsResizeMapType
  | IsActiveRoutType
  | ChangeWarehouseType;

export type SetErrorType = ReturnType<typeof setError>;
export type SetRoutsType = ReturnType<typeof setRoutes>;
export type FetchRoutType = ReturnType<typeof fetchRout>;
export type IsResizeMapType = ReturnType<typeof isResizeMap>;
export type IsActiveRoutType = ReturnType<typeof isActiveRout>;
export type ChangeWarehouseType = ReturnType<typeof changeWarehouse>;
