import { changeWarehouse } from 'store/actions';

export type AppActionsType = changeWarehouseType;

export type changeWarehouseType = ReturnType<typeof changeWarehouse>;
