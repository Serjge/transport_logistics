import { AxiosError, AxiosResponse } from 'axios';
import { call, put, spawn, StrictEffect, takeEvery } from 'redux-saga/effects';

import { API } from 'api';
import { RouteResponseType } from 'api/type';
import { ZERO_ELEMENT } from 'const';
import { StatusCode } from 'enum';
import { FETCH_ROUT, setRoutes, FetchRoutType, setError } from 'store/actions';
import { getRoutes } from 'utils';

type RouteType = AxiosResponse<RouteResponseType>;

const EMPTY_ARRAY = 0;

function* getRoutsSaga(action: FetchRoutType): Generator<StrictEffect, void, RouteType> {
  const { from, to, orderId } = action.payload;

  try {
    const {
      data: {
        route: { legs },
        info: { messages, statuscode },
      },
    } = yield call(API.getRoute, from, to);

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
