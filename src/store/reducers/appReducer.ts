import { AppActionsType, CHANGE_WAREHOUSE } from 'store/actions';
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
      lng: 28.29146,
      lat: 57.83511,
    },

    {
      id: '2',
      city: 'Псков',
      state: 'ру',
      street: 'Котово',
      lng: 28.29146,
      lat: 57.83511,
    },
    {
      id: '3',
      city: 'Псков',
      state: 'ру',
      street: 'Октябрьский пр. 60',
      lng: 28.368302,
      lat: 57.809,
    },
    {
      id: '4',
      city: 'Псков',
      state: 'ру',
      street: 'Генерала Маргелова, 41',
      lng: 28.29146,
      lat: 57.83511,
    },
  ],
  orders: [
    {
      id: '1',
      loadingWarehouseId: '3',
      unloadingWarehouseId: '2',
    },
    {
      id: '2',
      loadingWarehouseId: '4',
      unloadingWarehouseId: '1',
    },
    {
      id: '3',
      loadingWarehouseId: '2',
      unloadingWarehouseId: '4',
    },
    {
      id: '4',
      loadingWarehouseId: '1',
      unloadingWarehouseId: '3',
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

    default:
      return state;
  }
};
