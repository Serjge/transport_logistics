import { ReactElement } from 'react';

import { Button } from 'antd';
import { Marker, Popup, useMapEvent } from 'react-leaflet';
import { useSelector } from 'react-redux';

import { useActions } from 'hook';
import { selectMapMark } from 'store/selectors';

export const PutMark = (): ReactElement | null => {
  const { fetchAddress, setNewWarehouses, removeMapMark } = useActions();

  const mapMark = useSelector(selectMapMark);

  useMapEvent('click', e => {
    if (mapMark === null) {
      fetchAddress(e.latlng);
    }

    if (mapMark) {
      removeMapMark();
    }
  });

  if (mapMark === null) {
    return null;
  }

  const { latLng, adminArea5, adminArea1, street } = mapMark;

  const onAddWarehousesClick = (): void => {
    setNewWarehouses(adminArea5, street, adminArea1, latLng);
  };

  return (
    <Marker position={latLng}>
      <Popup>
        {`${street} ${adminArea5} ${adminArea1}.`}
        <br />
        <Button size="small" type="primary" onClick={onAddWarehousesClick}>
          Add warehouses
        </Button>
      </Popup>
    </Marker>
  );
};
