import {
  changeWarehouse,
  isActiveRout,
  setRoutes,
  fetchRout,
  setError,
} from 'store/actions';

export type AppActionsType =
  | ChangeWarehouseType
  | SetRoutsType
  | FetchRoutType
  | IsActiveRoutType
  | SetErrorType;

export type ChangeWarehouseType = ReturnType<typeof changeWarehouse>;
export type SetRoutsType = ReturnType<typeof setRoutes>;
export type FetchRoutType = ReturnType<typeof fetchRout>;
export type IsActiveRoutType = ReturnType<typeof isActiveRout>;
export type SetErrorType = ReturnType<typeof setError>;
