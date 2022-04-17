import { ReactElement } from 'react';

import { Popup, Marker } from 'react-leaflet';

import { WarehouseType } from 'type';

type MarkPropsType = {
  position: WarehouseType;
  typePlace: 'Loading' | 'Unloading';
};

export const Mark = ({ position, typePlace }: MarkPropsType): ReactElement => {
  const { point, street, city, state } = position;
  return (
    <Marker position={point}>
      <Popup>
        {typePlace}. <br /> {` ${street}, ${city}, ${state}`}.
      </Popup>
    </Marker>
  );
};
