import { all, takeLatest } from 'redux-saga/effects';
import { Sagas } from './nodes/sagas';
import { TNodes } from './nodes/types';

const sagas: Sagas = new Sagas();
export class RootSaga extends Sagas {
  public *root(type: void) {
    return yield all([takeLatest(TNodes.GET, () => sagas.getNodes())]);
  }
}
