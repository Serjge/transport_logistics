import { LatLngLiteral } from 'leaflet';

import { InfoType, LocationType } from 'api/type';

export type AddressResponseType = {
  info: InfoType;
  options: OptionsType;
  results: ResultType[];
};

type OptionsType = {
  maxResults: number;
  thumbMaps: boolean;
  ignoreLatLngInput: boolean;
};

type ResultType = {
  locations: LocationAddressType[];
  providedLocation: ProvidedLocationType;
};

export type LocationAddressType = LocationType & {
  adminArea6: string;
  adminArea6Type: string;
  mapUrl: string;
  unknownInput: string;
};

type ProvidedLocationType = {
  latLng: LatLngLiteral;
};
