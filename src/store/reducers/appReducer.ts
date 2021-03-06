import { LatLngLiteral } from 'leaflet';

import { LocationAddressType } from 'api/type';
import {
  AppActionsType,
  CHANGE_WAREHOUSE,
  IS_ACTIVE_ROUT,
  IS_RESIZE_MAP,
  REMOVE_MAP_MARK,
  SET_ERROR,
  SET_MAP_MARK,
  SET_NEW_WAREHOUSES,
  SET_ROUTES,
} from 'store/actions';
import { OrderType, WarehouseType } from 'type';

export type InitialAppStateType = {
  warehouses: WarehouseType[];
  orders: OrderType[];
  error: string | null;
  centerMap: LatLngLiteral;
  zoom: number;
  isResize: boolean;
  mapMark: LocationAddressType | null;
};

const CURRENT_ELEMENT = 1;

const initialState: InitialAppStateType = {
  warehouses: [
    {
      id: '1',
      city: 'Псков',
      state: 'ру',
      street: 'Ижерского Батальона 24Г',
      point: {
        lng: 28.29146,
        lat: 57.83511,
      },
    },
    {
      id: '2',
      city: 'Псков',
      state: 'ру',
      street: 'Белинского 74А',
      point: {
        lng: 28.344,
        lat: 57.8315,
      },
    },
    {
      id: '3',
      city: 'Псков',
      state: 'ру',
      street: 'Октябрьский пр. 60',
      point: {
        lng: 28.368302,
        lat: 57.809,
      },
    },
    {
      id: '4',
      city: 'Псков',
      state: 'ру',
      street: 'Генерала Маргелова, 41',
      point: {
        lng: 28.287,
        lat: 57.789439,
      },
    },
  ],
  orders: [
    {
      id: '1',
      loadingWarehouseId: '3',
      unloadingWarehouseId: '2',
      routes: [],
      isActive: false,
      color: 'lime',
    },
    {
      id: '2',
      loadingWarehouseId: '4',
      unloadingWarehouseId: '1',
      routes: [],
      isActive: false,
      color: 'darkred',
    },
    {
      id: '3',
      loadingWarehouseId: '2',
      unloadingWarehouseId: '4',
      routes: [],
      isActive: false,
      color: 'darkblue',
    },
    {
      id: '4',
      loadingWarehouseId: '1',
      unloadingWarehouseId: '3',
      routes: [],
      isActive: false,
      color: 'blue',
    },
  ],
  error: null,
  centerMap: { lng: 28.332645, lat: 57.819312 },
  zoom: 12,
  isResize: false,
  mapMark: null,
};

export const appReducer = (
  state = initialState,
  action: AppActionsType,
): InitialAppStateType => {
  switch (action.type) {
    case CHANGE_WAREHOUSE: {
      const { warehouseId, orderId, pointType } = action.payload;

      if (pointType === 'loading') {
        return {
          ...state,
          orders: state.orders.map(order =>
            order.id === orderId ? { ...order, loadingWarehouseId: warehouseId } : order,
          ),
        };
      }

      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === orderId ? { ...order, unloadingWarehouseId: warehouseId } : order,
        ),
      };
    }

    case SET_ROUTES: {
      const { routs, orderId } = action.payload;

      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === orderId ? { ...order, routes: [...routs] } : order,
        ),
      };
    }

    case IS_ACTIVE_ROUT: {
      const { isActive, orderId } = action.payload;

      return {
        ...state,
        orders: state.orders.map(order =>
          order.id === orderId ? { ...order, isActive } : order,
        ),
      };
    }

    case SET_ERROR: {
      const { error } = action.payload;

      return { ...state, error };
    }

    case IS_RESIZE_MAP: {
      const { isResize } = action.payload;

      return { ...state, isResize };
    }

    case SET_MAP_MARK: {
      const { location } = action.payload;

      return { ...state, mapMark: { ...location } };
    }

    case SET_NEW_WAREHOUSES: {
      const { state: statePayload, point, city, street } = action.payload;
      const id = String(state.warehouses.length + CURRENT_ELEMENT);

      return {
        ...state,
        warehouses: [
          ...state.warehouses,
          { id, city, state: statePayload, street, point },
        ],
      };
    }
    case REMOVE_MAP_MARK: {
      return {
        ...state,
        mapMark: null,
      };
    }

    default:
      return state;
  }
};
