import { AxiosResponse } from 'axios';
import { LatLngLiteral } from 'leaflet';
import { call, put, StrictEffect, takeLeading } from 'redux-saga/effects';

import { API } from 'api';
import { RouteResponseType } from 'api/type';
import { setRouts } from 'store/actions';

function* example(): Generator {
  console.log('click');
}

const CENTER2: LatLngLiteral = { lng: 28.287, lat: 57.789439 };
const CENTER3: LatLngLiteral = { lng: 28.368302, lat: 57.809 };

// function* getRoutesSaga(): Generator {
//   const res = await API.getRoute(CENTER2, CENTER3);
//   console.log('click');
// }

type RouteType = AxiosResponse<RouteResponseType, any>;
// type qweType = ReturnType<typeof API.getRoute>;

function* getRoutsSaga(): Generator<StrictEffect, void, RouteType> {
  const {
    data: {
      route: { legs },
    },
  } = yield call(API.getRoute, CENTER2, CENTER3);
  const routes: LatLngLiteral[] = [];

  legs.map(({ maneuvers }) => maneuvers.map(({ startPoint }) => routes.push(startPoint)));

  yield put(setRouts(routes));
}

function* watchSaga(): Generator {
  yield takeLeading('CLICK', getRoutsSaga);
}

export function* rootSaga(): Generator {
  console.log('saga');
  yield watchSaga();
  yield call(example);
}
