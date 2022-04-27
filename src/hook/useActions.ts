import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
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

export const useActions = (): typeof allActions => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
