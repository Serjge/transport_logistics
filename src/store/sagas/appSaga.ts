import { AxiosError, AxiosResponse } from 'axios';
import { LatLngLiteral } from 'leaflet';
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
import { AddressResponseType, RouteResponseType } from 'api/type';
import { ZERO_ELEMENT } from 'const';
import { StatusCode } from 'enum';
import {
  FETCH_ADDRESS,
  FETCH_ROUT,
  FetchAddressType,
  FetchRoutType,
  setError,
  SetErrorType,
  setMapMark,
  setRoutes,
  SetRoutsType,
  SetMapMarkType,
} from 'store/actions';
import { selectOrder, selectWarehouses } from 'store/selectors';
import { OrderType, WarehouseType } from 'type';
import { getPointWarehouse, getRoutes } from 'utils';

const EMPTY_ARRAY = 0;
const FIRST_ELEMENT = 0;

type RouteType = AxiosResponse<RouteResponseType>;
type AddressType = AxiosResponse<AddressResponseType>;
type OrderWarehousesType = {
  loadingWarehouse: LatLngLiteral;
  unloadingWarehouse: LatLngLiteral;
};

function* getOrderWarehousesSaga(
  orderId: string,
): Generator<SelectEffect, OrderWarehousesType, OrderType & WarehouseType[]> {
  const warehouses = yield select(selectWarehouses);
  const { unloadingWarehouseId, loadingWarehouseId } = yield select(selectOrder, orderId);
  const loadingWarehouse = getPointWarehouse(warehouses, loadingWarehouseId);
  const unloadingWarehouse = getPointWarehouse(warehouses, unloadingWarehouseId);

  return { loadingWarehouse, unloadingWarehouse };
}

function* getRoutsSaga(
  action: FetchRoutType,
): Generator<
  PutEffect<SetErrorType | SetRoutsType> | CallEffect<RouteType | OrderWarehousesType>,
  void,
  RouteType & OrderWarehousesType
> {
  const { orderId } = action.payload;

  const { loadingWarehouse, unloadingWarehouse } = yield call(
    getOrderWarehousesSaga,
    orderId,
  );

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

function* getAddressSaga(
  action: FetchAddressType,
): Generator<
  PutEffect<SetErrorType | SetMapMarkType> | CallEffect<AddressType>,
  void,
  AddressType
> {
  const { location } = action.payload;

  try {
    const {
      data: {
        results,
        info: { messages, statuscode },
      },
    } = yield call(API.getAddress, location);

    if (statuscode === StatusCode.Success) {
      yield put(setMapMark(results[FIRST_ELEMENT].locations[FIRST_ELEMENT]));
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
  yield takeEvery(FETCH_ADDRESS, getAddressSaga);
}

export function* rootSaga(): Generator {
  yield spawn(watchSaga);
}
