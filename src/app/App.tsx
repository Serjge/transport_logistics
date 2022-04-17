import { FC } from 'react';

import { useSelector } from 'react-redux';

import { AppContainer, AppWrapper } from './style';

import { MapLeaflet, OrderTable } from 'components';
import { selectError } from 'store/selectors';

export const App: FC = () => {
  const error = useSelector(selectError);

  return (
    <AppWrapper>
      <h1>Transport logistics</h1>

      <AppContainer>
        <OrderTable />
        <MapLeaflet />
      </AppContainer>
      {error}
    </AppWrapper>
  );
};
