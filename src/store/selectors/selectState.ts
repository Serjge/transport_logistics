import { LatLngLiteral } from 'leaflet';

import { ZERO_ELEMENT_ARRAY } from 'const';
import { RootReducerType } from 'store';
import { OrderType, WarehouseType } from 'type';

export const selectState = (state: RootReducerType): RootReducerType => state;

export const selectWarehouses = (state: RootReducerType): WarehouseType[] =>
  state.app.warehouses;

export const selectOrders = (state: RootReducerType): OrderType[] => state.app.orders;

export const selectRoutes = (state: RootReducerType, orderId: string): LatLngLiteral[] =>
  state.app.orders.filter(({ id }) => id === orderId)[ZERO_ELEMENT_ARRAY].routes;

export const selectLoadingWarehouse = (
  state: RootReducerType,
  orderId: string,
): WarehouseType => {
  const { loadingWarehouseId } = state.app.orders.filter(({ id }) => id === orderId)[
    ZERO_ELEMENT_ARRAY
  ];

  return state.app.warehouses.filter(({ id }) => id === loadingWarehouseId)[
    ZERO_ELEMENT_ARRAY
  ];
};

export const selectUnloadingWarehouse = (
  state: RootReducerType,
  orderId: string,
): WarehouseType => {
  const { unloadingWarehouseId } = state.app.orders.filter(({ id }) => id === orderId)[
    ZERO_ELEMENT_ARRAY
  ];

  return state.app.warehouses.filter(({ id }) => id === unloadingWarehouseId)[
    ZERO_ELEMENT_ARRAY
  ];
};

export const selectColor = (state: RootReducerType, orderId: string): string =>
  state.app.orders.filter(({ id }) => id === orderId)[ZERO_ELEMENT_ARRAY].color;

export const selectIsActive = (state: RootReducerType, orderId: string): boolean =>
  state.app.orders.filter(({ id }) => id === orderId)[ZERO_ELEMENT_ARRAY].isActive;
