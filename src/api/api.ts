import { LatLngLiteral } from 'leaflet';

import { RouteResponseType } from './type';

import { instance } from 'api';
import { PathApi } from 'enum';

export const API = {
  getRoute(from: LatLngLiteral, to: LatLngLiteral) {
    return instance.get<RouteResponseType>(PathApi.Route, {
      params: {
        key: process.env.REACT_APP_API_KEY,
        from: `${from.lat},${from.lng}`,
        to: `${to.lat},${to.lng}`,
        unit: 'k', //  Kilometers
      },
    });
  },
};
