import { isLoadingAC } from 'store/actions';

export type AppActionsType = IsLoadingType;

export type IsLoadingType = ReturnType<typeof isLoadingAC>;
