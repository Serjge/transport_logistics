import { ReactElement } from 'react';

import { Button } from 'antd';
import { Marker, Popup, useMapEvent } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';

import { useActions } from 'hook';
import { setNewWarehouses } from 'store/actions';
import { selectMapMark } from 'store/selectors';

export const PutMark = (): ReactElement | null => {
  const dispatch = useDispatch();
  const { fetchAddress } = useActions();

  const mapMark = useSelector(selectMapMark);

  useMapEvent('click', e => {
    fetchAddress(e.latlng);
  });

  if (mapMark === null) {
    return null;
  }

  const { latLng, adminArea5, adminArea1, street } = mapMark;

  const onAddWarehousesClick = (): void => {
    dispatch(setNewWarehouses(adminArea5, street, adminArea1, latLng));
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
