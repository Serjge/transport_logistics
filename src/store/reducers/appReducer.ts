import { AppActionsType, IS_LOADING } from 'store/actions';
import { WarehouseType } from 'type';

export type InitialStateType = {
  isLoading: boolean;
  warehouses: WarehouseType[];
  orders: string[];
};

const initialState: InitialStateType = {
  warehouses: [
    {
      id: '1',
      city: 'Псков',
      state: 'ру',
      street: 'Труда 20',
    },
    {
      id: '2',
      city: 'Псков',
      state: 'ру',
      street: 'Инженерная 12',
    },
    {
      id: '3',
      city: 'Псков',
      state: 'ру',
      street: 'Шосейная 3',
    },
    {
      id: '4',
      city: 'Псков',
      state: 'ру',
      street: 'Рокосовскаго 16',
    },
  ],
  orders: [],
  isLoading: false,
};

export const appReducer = (
  state = initialState,
  action: AppActionsType,
): InitialStateType => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
};
