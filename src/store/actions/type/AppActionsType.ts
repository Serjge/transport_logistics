import { changeWarehouse, setRouts } from 'store/actions';

export type AppActionsType = ChangeWarehouseType | SetRoutsType;

export type ChangeWarehouseType = ReturnType<typeof changeWarehouse>;
export type SetRoutsType = ReturnType<typeof setRouts>;
