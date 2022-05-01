import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  changeWarehouse,
  fetchAddress,
  fetchRout,
  isActiveRout,
  isResizeMap,
  removeMapMark,
  setError,
  setMapMark,
  setNewWarehouses,
  setRoutes,
} from 'store/actions';

const allActions = {
  changeWarehouse,
  setRoutes,
  isActiveRout,
  setError,
  fetchRout,
  isResizeMap,
  setMapMark,
  fetchAddress,
  setNewWarehouses,
  removeMapMark,
};

export const useActions = (): typeof allActions => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};
