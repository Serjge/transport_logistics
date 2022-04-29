import { LatLngLiteral } from 'leaflet';

import { instance } from 'api';
import { RouteResponseType, AddressResponseType } from 'api/type';
import { PathApi } from 'enum';

const KEY = process.env.REACT_APP_API_KEY;

export const API = {
  getRoute(from: LatLngLiteral, to: LatLngLiteral) {
    return instance.get<RouteResponseType>(PathApi.Route, {
      params: {
        key: KEY,
        from: `${from.lat},${from.lng}`,
        to: `${to.lat},${to.lng}`,
        unit: 'k', //  Kilometers
      },
    });
  },
  getAddress(location: LatLngLiteral) {
    return instance.get<AddressResponseType>(PathApi.Address, {
      params: {
        key: KEY,
        location: `${location.lat},${location.lng}`,
      },
    });
  },
};
