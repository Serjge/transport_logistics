import { ReactElement } from 'react';

import L from 'leaflet';
import { Polyline } from 'react-leaflet';
import { useSelector } from 'react-redux';

import { Mark } from 'components';
import { RootReducerType } from 'store';
import {
  selectColor,
  selectLoadingWarehouse,
  selectRoutes,
  selectUnloadingWarehouse,
} from 'store/selectors';

type MotionTrackPropsType = {
  orderId: string;
};

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';

export const MotionTrack = ({ orderId }: MotionTrackPropsType): ReactElement => {
  const color = useSelector((state: RootReducerType) => selectColor(state, orderId));
  const routes = useSelector((state: RootReducerType) => selectRoutes(state, orderId));
  const loadingWarehouse = useSelector((state: RootReducerType) =>
    selectLoadingWarehouse(state, orderId),
  );
  const unloadingWarehouse = useSelector((state: RootReducerType) =>
    selectUnloadingWarehouse(state, orderId),
  );

  return (
    <div>
      <Mark lat={loadingWarehouse.lat} lng={loadingWarehouse.lng} />
      <Mark lat={unloadingWarehouse.lat} lng={unloadingWarehouse.lng} />
      <Polyline pathOptions={{ color }} positions={routes} />
    </div>
  );
};
