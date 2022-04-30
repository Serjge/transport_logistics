import { LatLngLiteral } from 'leaflet';

import { LocationAddressType } from 'api/type';
import { ZERO_ELEMENT } from 'const';
import { RootReducerType } from 'store';
import { OrderType, WarehouseType } from 'type';

export const selectApp = (state: RootReducerType): RootReducerType => state;

export const selectWarehouses = (state: RootReducerType): WarehouseType[] =>
  state.app.warehouses;

export const selectWarehouse = (
  state: RootReducerType,
  warehouseId: string,
): WarehouseType =>
  state.app.warehouses.filter(({ id }) => id === warehouseId)[ZERO_ELEMENT];

export const selectOrders = (state: RootReducerType): OrderType[] => state.app.orders;

export const selectOrder = (state: RootReducerType, orderId: string): OrderType =>
  state.app.orders.filter(({ id }) => id === orderId)[ZERO_ELEMENT];

export const selectRoutes = (state: RootReducerType, orderId: string): LatLngLiteral[] =>
  selectOrder(state, orderId).routes;

export const selectLoadingWarehouse = (
  state: RootReducerType,
  orderId: string,
): WarehouseType => {
  const { loadingWarehouseId } = selectOrder(state, orderId);

  return selectWarehouse(state, loadingWarehouseId);
};

export const selectUnloadingWarehouse = (
  state: RootReducerType,
  orderId: string,
): WarehouseType => {
  const { unloadingWarehouseId } = selectOrder(state, orderId);

  return selectWarehouse(state, unloadingWarehouseId);
};

export const selectColor = (state: RootReducerType, orderId: string): string =>
  selectOrder(state, orderId).color;

export const selectIsActive = (state: RootReducerType, orderId: string): boolean =>
  selectOrder(state, orderId).isActive;

export const selectError = (state: RootReducerType): string | null => state.app.error;

export const selectCenterMap = (state: RootReducerType): LatLngLiteral =>
  state.app.centerMap;

export const selectZoom = (state: RootReducerType): number => state.app.zoom;

export const selectIsResize = (state: RootReducerType): boolean => state.app.isResize;

export const selectMapMark = (state: RootReducerType): LocationAddressType | null =>
  state.app.mapMark;
