import { changeWarehouse, isActiveRout, setRouts, setRout } from 'store/actions';

export type AppActionsType =
  | ChangeWarehouseType
  | SetRoutsType
  | SetClickType
  | IsActiveRoutType;

export type ChangeWarehouseType = ReturnType<typeof changeWarehouse>;
export type SetRoutsType = ReturnType<typeof setRouts>;
export type SetClickType = ReturnType<typeof setRout>;
export type IsActiveRoutType = ReturnType<typeof isActiveRout>;
