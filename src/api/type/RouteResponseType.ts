import { LatLngLiteral } from 'leaflet';

export type RouteResponseType = {
  info: InfoType;
  route: RouteType;
};

export type InfoType = {
  copyright: { imageAltText: string; imageUrl: string; text: string };
  messages: string[];
  statuscode: number;
};

type RouteType = {
  boundingBox: BoundingBoxType;
  computedWaypoints: [];
  distance: number;
  formattedTime: Date;
  fuelUsed: number;
  hasAccessRestriction: boolean;
  hasBridge: boolean;
  hasCountryCross: boolean;
  hasFerry: boolean;
  hasHighway: boolean;
  hasSeasonalClosure: boolean;
  hasTimedRestriction: boolean;
  hasTollRoad: boolean;
  hasTunnel: boolean;
  hasUnpaved: boolean;
  legs: LegType[];
  locationSequence: [number];
  locations: LocationType[];
  options: OptionType;
  realTime: number;
  routeError: RouteErrorType;
  sessionId: string;
  time: number;
};

type RouteErrorType = {
  errorCode: number;
  message: string;
};

type BoundingBoxType = {
  lr: LatLngLiteral;
  ul: LatLngLiteral;
};

export type LocationType = {
  adminArea1: string; // country location
  adminArea1Type: string;
  adminArea3: string; // state location
  adminArea3Type: string;
  adminArea4: string; // county location
  adminArea4Type: string;
  adminArea5: string; // city location
  adminArea5Type: string;
  displayLatLng: LatLngLiteral;
  dragPoint: boolean;
  geocodeQuality: string;
  geocodeQualityCode: string;
  latLng: LatLngLiteral;
  linkId: number;
  postalCode: string;
  sideOfStreet: string;
  street: string;
  type: string;
};

type OptionType = {
  arteryWeights: [];
  avoidTimedConditions: boolean;
  avoidTripIds: [];
  countryBoundaryDisplay: boolean;
  cyclingRoadFactor: number;
  destinationManeuverDisplay: boolean;
  doReverseGeocode: boolean;
  drivingStyle: number;
  enhancedNarrative: boolean;
  filterZoneFactor: number;
  generalize: number;
  highwayEfficiency: number;
  locale: string;
  maneuverPenalty: number;
  manmaps: string;
  maxLinkId: number;
  maxWalkingDistance: number;
  mustAvoidLinkIds: [];
  narrativeType: string;
  returnLinkDirections: boolean;
  routeNumber: number;
  routeType: string;
  shapeFormat: string;
  sideOfStreetDisplay: boolean;
  stateBoundaryDisplay: boolean;
  timeType: number;
  transferPenalty: number;
  tryAvoidLinkIds: [];
  unit: string;
  urbanAvoidFactor: number;
  useTraffic: boolean;
  walkingSpeed: number;
};

export type LegType = {
  destIndex: number;
  destNarrative: string;
  distance: number;
  formattedTime: string;
  hasAccessRestriction: boolean;
  hasBridge: boolean;
  hasCountryCross: boolean;
  hasFerry: boolean;
  hasHighway: boolean;
  hasSeasonalClosure: boolean;
  hasTimedRestriction: boolean;
  hasTollRoad: boolean;
  hasTunnel: boolean;
  hasUnpaved: boolean;
  index: number;
  maneuvers: ManeuverType[];
  origIndex: number;
  origNarrative: string;
  roadGradeStrategy: [];
  time: number;
};

type ManeuverType = {
  attributes: number;
  direction: number;
  directionName: string;
  distance: number;
  formattedTime: string;
  iconUrl: string;
  index: number;
  linkIds: [];
  maneuverNotes: [];
  mapUrl: string;
  narrative: string;
  signs: [];
  startPoint: LatLngLiteral;
  streets: string[];
  time: number;
  transportMode: string;
  turnType: number;
};
