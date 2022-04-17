import { AxiosResponse } from 'axios';
import { call, put, spawn, StrictEffect, takeEvery } from 'redux-saga/effects';

import { API } from 'api';
import { RouteResponseType } from 'api/type';
import { SET_ROUT, setRouts, SetClickType } from 'store/actions';
import { getRoutes } from 'utils';

type RouteType = AxiosResponse<RouteResponseType>;

function* getRoutsSaga(action: SetClickType): Generator<StrictEffect, void, RouteType> {
  const { from, to, orderId } = action.payload;

  try {
    const {
      data: {
        route: { legs },
      },
    } = yield call(API.getRoute, from, to);

    yield put(setRouts(orderId, getRoutes(legs)));
  } catch (e) {
    console.log(e);
  }
}

function* watchSaga(): Generator {
  yield takeEvery(SET_ROUT, getRoutsSaga);
}

export function* rootSaga(): Generator {
  yield spawn(watchSaga);
}
