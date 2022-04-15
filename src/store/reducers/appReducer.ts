import { AppActionsType, IS_LOADING } from 'store/actions';

export type InitialStateType = {
  isLoading: boolean;
};

const initialState: InitialStateType = {
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
