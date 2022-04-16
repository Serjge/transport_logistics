import { PointType } from 'type';

export const CHANGE_WAREHOUSE = 'APP/CHANGE_WAREHOUSE';

export const changeWarehouse = (
  orderId: string,
  warehouseId: string,
  pointType: PointType,
) =>
  ({
    type: CHANGE_WAREHOUSE,
    payload: {
      orderId,
      warehouseId,
      pointType,
    },
  } as const);
