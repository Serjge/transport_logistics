import {
  AppActionsType,
  CHANGE_WAREHOUSE,
  IS_ACTIVE_ROUT,
  SET_ROUTS,
} from 'store/actions';
import { OrderType, WarehouseType } from 'type';

export type InitialStateType = {
  warehouses: WarehouseType[];
  orders: OrderType[];
};

const initialState: InitialStateType = {
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
      street: 'Котово',
      point: {
        lng: 28.324141,
        lat: 57.854074,
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
};

export const appReducer = (
  state = initialState,
  action: AppActionsType,
): InitialStateType => {
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

    case SET_ROUTS: {
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
    default:
      return state;
  }
};
