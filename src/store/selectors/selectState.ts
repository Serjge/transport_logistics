import { RootReducerType } from 'store';
import { WarehouseType } from 'type';

export const selectState = (state: RootReducerType): RootReducerType => state;

export const selectWarehouses = (state: RootReducerType): WarehouseType[] =>
  state.app.warehouses;
