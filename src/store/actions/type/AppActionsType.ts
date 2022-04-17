import { changeWarehouse, isActiveRout, setRoutes, fetchRout } from 'store/actions';

export type AppActionsType =
  | ChangeWarehouseType
  | SetRoutsType
  | SetClickType
  | IsActiveRoutType;

export type ChangeWarehouseType = ReturnType<typeof changeWarehouse>;
export type SetRoutsType = ReturnType<typeof setRoutes>;
export type SetClickType = ReturnType<typeof fetchRout>;
export type IsActiveRoutType = ReturnType<typeof isActiveRout>;
