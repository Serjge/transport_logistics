import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { appReducer } from 'store/reducers';
import { rootSaga } from 'store/sagas';

const rootReducer = combineReducers({
  app: appReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), composeEnhancers()),
);

export type RootReducerType = ReturnType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);
