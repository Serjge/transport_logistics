export const IS_LOADING = 'APP/IS_LOADING';

export const isLoadingAC = (isLoading: boolean) =>
  ({
    type: IS_LOADING,
    payload: {
      isLoading,
    },
  } as const);
