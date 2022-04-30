import {
  changeWarehouse,
  isActiveRout,
  setRoutes,
  fetchRout,
  setError,
  isResizeMap,
  fetchAddress,
  setMapMark,
} from 'store/actions';
import { setNewWarehouses } from 'store/actions/appAction';

export type AppActionsType =
  | SetRoutsType
  | SetErrorType
  | FetchRoutType
  | SetMapMarkType
  | IsResizeMapType
  | FetchAddressType
  | IsActiveRoutType
  | ChangeWarehouseType
  | SetNewWarehousesType;

export type SetErrorType = ReturnType<typeof setError>;
export type SetRoutsType = ReturnType<typeof setRoutes>;
export type FetchRoutType = ReturnType<typeof fetchRout>;
export type SetMapMarkType = ReturnType<typeof setMapMark>;
export type IsResizeMapType = ReturnType<typeof isResizeMap>;
export type FetchAddressType = ReturnType<typeof fetchAddress>;
export type IsActiveRoutType = ReturnType<typeof isActiveRout>;
export type ChangeWarehouseType = ReturnType<typeof changeWarehouse>;
export type SetNewWarehousesType = ReturnType<typeof setNewWarehouses>;
