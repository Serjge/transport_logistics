import { LatLngLiteral } from 'leaflet';

import { LegType } from 'api/type';

export const getRoutes = (legs: LegType[]): LatLngLiteral[] => {
  const routes: LatLngLiteral[] = [];

  legs.forEach(({ maneuvers }) =>
    maneuvers.forEach(({ startPoint }) => routes.push(startPoint)),
  );

  return routes;
};
