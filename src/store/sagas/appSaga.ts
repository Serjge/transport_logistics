import { call } from 'redux-saga/effects';

function* example(): Generator {
  console.log('example');
}

export function* rootSaga(): Generator {
  console.log('saga');
  // const sagas = [example()];

  // const retrySagas = yield sagas.map(saga =>
  //   spawn(function* (): Generator {
  //     while (true) {
  //       try {
  //         yield call(saga);
  //         break;
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     }
  //   }),
  // );
  // yield all(sagas);
  yield call(example);
}
