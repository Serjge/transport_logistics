import { AxiosError, AxiosResponse } from 'axios';
import {
  call,
  CallEffect,
  put,
  PutEffect,
  select,
  SelectEffect,
  spawn,
  takeEvery,
} from 'redux-saga/effects';

import { API } from 'api';
import { RouteResponseType } from 'api/type';
import { ZERO_ELEMENT } from 'const';
import { StatusCode } from 'enum';
import {
  FETCH_ROUT,
  FetchRoutType,
  setError,
  SetErrorType,
  setRoutes,
  SetRoutsType,
} from 'store/actions';
import { selectOrder, selectWarehouses } from 'store/selectors';
import { RootReducerType } from 'store/store';
import { OrderType, WarehouseType } from 'type';
import { getPointWarehouse, getRoutes } from 'utils';

type RouteType = AxiosResponse<RouteResponseType>;

const EMPTY_ARRAY = 0;

function* getRoutsSaga(
  action: FetchRoutType,
): Generator<
  PutEffect<SetErrorType | SetRoutsType> | CallEffect<RouteType> | SelectEffect,
  void,
  RootReducerType & RouteType & OrderType & WarehouseType[]
> {
  const { orderId } = action.payload;

  const warehouses = yield select(selectWarehouses);
  const { unloadingWarehouseId, loadingWarehouseId } = yield select(selectOrder, orderId);
  const loadingWarehouse = getPointWarehouse(warehouses, loadingWarehouseId);
  const unloadingWarehouse = getPointWarehouse(warehouses, unloadingWarehouseId);

  try {
    const {
      data: {
        route: { legs },
        info: { messages, statuscode },
      },
    } = yield call(API.getRoute, loadingWarehouse, unloadingWarehouse);

    if (statuscode === StatusCode.Success) {
      yield put(setRoutes(orderId, getRoutes(legs)));
    }

    if (messages.length !== EMPTY_ARRAY) {
      yield put(setError(messages[ZERO_ELEMENT]));
    }
  } catch (error) {
    const { message } = error as AxiosError;

    yield put(setError(message));
  }
}

function* watchSaga(): Generator {
  yield takeEvery(FETCH_ROUT, getRoutsSaga);
}

export function* rootSaga(): Generator {
  yield spawn(watchSaga);
}
