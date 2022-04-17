import { useDispatch } from 'react-redux';
import { ActionCreatorsMapObject, bindActionCreators } from 'redux';

import {
  AllAppActionsType,
  changeWarehouse,
  fetchRout,
  isActiveRout,
  setError,
  setRoutes,
} from 'store/actions';

const allActions = {
  changeWarehouse,
  setRoutes,
  isActiveRout,
  setError,
  fetchRout,
};

export const useActions = (): ActionCreatorsMapObject<AllAppActionsType> => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
