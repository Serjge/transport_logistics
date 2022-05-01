import { LocationAddressType } from 'api/type';
import { Element } from 'enum';
import {
  changeWarehouse,
  isActiveRout,
  isResizeMap,
  removeMapMark,
  setError,
  setMapMark,
  setNewWarehouses,
  setRoutes,
} from 'store/actions';
import { appReducer, InitialAppStateType } from 'store/reducers/appReducer';

let initialState: InitialAppStateType;

const LENGTH_ARRAY_SIX = 6;
const LAST_ELEMENT = 1;
const secondOrder = '2';
const thirdOrder = '3';
const warehouseId = '3';
const error = 'ERROR';
const city = 'Pskov';
const state = 'RU';
const street = 'Lenina';
const point = {
  lat: 57.83342,
  lng: 28.319382,
};

const location: LocationAddressType = {
  street: 'Текстильный переулок',
  adminArea6: '',
  adminArea6Type: 'Neighborhood',
  adminArea5: 'Псков',
  adminArea5Type: 'City',
  adminArea4: '',
  adminArea4Type: 'County',
  adminArea3: 'Псковская область',
  adminArea3Type: 'State',
  adminArea1: 'RU',
  adminArea1Type: 'Country',
  postalCode: '180000',
  geocodeQualityCode: 'B1AAA',
  geocodeQuality: 'STREET',
  dragPoint: false,
  sideOfStreet: 'N',
  linkId: 0,
  unknownInput: '',
  type: 's',
  latLng: {
    lat: 57.83342,
    lng: 28.319382,
  },
  displayLatLng: {
    lat: 57.83342,
    lng: 28.319382,
  },
  mapUrl:
    'http://www.mapquestapi.com/staticmap/v5/map?key=FVfSyrceb9BJLn1vHom7SMKhdJnFGpCL&type=map&size=225,160&locations=57.833420376958344,28.31938164506402|marker-sm-50318A-1&scalebar=true&zoom=15&rand=-421367275',
};

const routes = [
  { lng: 28.368454, lat: 57.808624 },
  { lng: 28.372957, lat: 57.810947 },
  { lng: 28.386276, lat: 57.814129 },
  { lng: 28.434231, lat: 57.829689 },
  { lng: 28.32394, lat: 57.85622 },
  { lng: 28.322981, lat: 57.854942 },
];

beforeEach(() => {
  initialState = {
    error: null,
    centerMap: { lng: 28.332645, lat: 57.819312 },
    zoom: 12,
    isResize: false,
    mapMark: null,
    warehouses: [
      {
        id: '1',
        city: 'Псков',
        state: 'ру',
        street: 'Ижерского Батальона 24Г',
        point: {
          lng: 28.29146,
          lat: 57.83511,
        },
      },
      {
        id: '2',
        city: 'Псков',
        state: 'ру',
        street: 'Котово',
        point: {
          lng: 28.324141,
          lat: 57.854074,
        },
      },
      {
        id: '3',
        city: 'Псков',
        state: 'ру',
        street: 'Октябрьский пр. 60',
        point: {
          lng: 28.368302,
          lat: 57.809,
        },
      },
      {
        id: '4',
        city: 'Псков',
        state: 'ру',
        street: 'Генерала Маргелова, 41',
        point: {
          lng: 28.287,
          lat: 57.789439,
        },
      },
    ],
    orders: [
      {
        id: '1',
        loadingWarehouseId: '3',
        unloadingWarehouseId: '2',
        routes: [],
        isActive: false,
        color: 'lime',
      },
      {
        id: '2',
        loadingWarehouseId: '4',
        unloadingWarehouseId: '1',
        routes: [],
        isActive: false,
        color: 'darkred',
      },
      {
        id: '3',
        loadingWarehouseId: '2',
        unloadingWarehouseId: '4',
        routes: [],
        isActive: true,
        color: 'darkblue',
      },
      {
        id: '4',
        loadingWarehouseId: '1',
        unloadingWarehouseId: '3',
        routes: [],
        isActive: false,
        color: 'blue',
      },
    ],
  };
});

describe('app reducer action changeWarehouse', () => {
  test('change loading warehouse', () => {
    const action = changeWarehouse(secondOrder, warehouseId, 'loading');
    const endState = appReducer(initialState, action);

    expect(endState.orders[Element.First].loadingWarehouseId).toBe(warehouseId);
    expect(endState.orders[Element.First].unloadingWarehouseId).not.toBe(warehouseId);
  });
  test('change unloading warehouse', () => {
    const action = changeWarehouse(secondOrder, warehouseId, 'unloading');
    const endState = appReducer(initialState, action);

    expect(endState.orders[Element.First].loadingWarehouseId).not.toBe(warehouseId);
    expect(endState.orders[Element.First].unloadingWarehouseId).toBe(warehouseId);
  });
});

describe('app reducer action setRouts', () => {
  test('set routes ', () => {
    const action = setRoutes(secondOrder, routes);
    const endState = appReducer(initialState, action);

    expect(endState.orders[Element.First].routes.length).toBe(LENGTH_ARRAY_SIX);
    expect(endState.orders[Element.First].routes.length).not.toBe(
      initialState.orders[Element.First].routes.length,
    );
  });
});

describe('app reducer action isActiveRout', () => {
  test('change route active true', () => {
    const action = isActiveRout(secondOrder, true);
    const endState = appReducer(initialState, action);

    expect(endState.orders[Element.First].isActive).toBe(true);
    expect(endState.orders[Element.Zero].isActive).toBe(false);
  });

  test('change route active false', () => {
    const action = isActiveRout(thirdOrder, false);
    const endState = appReducer(initialState, action);

    expect(initialState.orders[Element.Second].isActive).toBe(true);
    expect(endState.orders[Element.Second].isActive).toBe(false);
    expect(endState.orders[Element.Zero].isActive).toBe(false);
  });
});

describe('app reducer action setError', () => {
  test('set error message', () => {
    const action = setError(error);
    const endState = appReducer(initialState, action);

    expect(endState.error).toBe(error);
    expect(initialState.error).toBe(null);
  });

  test('remove error message', () => {
    initialState.error = error;
    const action = setError(null);
    const endState = appReducer(initialState, action);

    expect(endState.error).toBe(null);
    expect(initialState.error).toBe(error);
  });
});

describe('app reducer action isResizeMap', () => {
  test('change isResize true', () => {
    const action = isResizeMap(true);
    const endState = appReducer(initialState, action);

    expect(endState.isResize).toBe(true);
    expect(initialState.isResize).toBe(false);
  });
});

describe('app reducer action setMapMark', () => {
  test('set map mark', () => {
    const action = setMapMark(location);
    const endState = appReducer(initialState, action);

    expect(endState.mapMark?.street).toBe(location.street);
    expect(initialState.mapMark).toBe(null);
  });
});

describe('app reducer action removeMapMark', () => {
  test('remove map mark', () => {
    initialState.mapMark = location;

    const action = removeMapMark();
    const endState = appReducer(initialState, action);

    expect(endState.mapMark).toBe(null);
    expect(initialState.mapMark).not.toBe(null);
    expect(initialState.mapMark).toBe(location);
  });
});

describe('app reducer action setNewWarehouses', () => {
  test('set new warehouses ', () => {
    const action = setNewWarehouses(city, street, state, point);
    const endState = appReducer(initialState, action);
    const lastWarehouses = endState.warehouses.length - LAST_ELEMENT;

    expect(endState.warehouses[lastWarehouses].city).toBe(city);
    expect(initialState.warehouses.length).not.toBe(endState.warehouses.length);
  });
});
