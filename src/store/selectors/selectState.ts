import { RootReducerType } from 'store';
import { OrderType, WarehouseType } from 'type';

export const selectState = (state: RootReducerType): RootReducerType => state;

export const selectWarehouses = (state: RootReducerType): WarehouseType[] =>
  state.app.warehouses;

export const selectOrders = (state: RootReducerType): OrderType[] => state.app.orders;
