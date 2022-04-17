import { Element } from 'enum';
import { changeWarehouse, isActiveRout, setError, setRoutes } from 'store/actions';
import { appReducer, InitialAppStateType } from 'store/reducers/appReducer';

let initialState: InitialAppStateType;

const LENGTH_ARRAY_SIX = 6;
const secondOrder = '2';
const thirdOrder = '3';
const warehouseId = '3';
const error = 'ERROR';

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
