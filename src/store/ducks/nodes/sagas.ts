import { call, put } from 'redux-saga/effects';
import { list } from './actions';
import { NodeService } from '../../../services/nodes';

export class Sagas extends NodeService {
  public *getNodes() {
    try {
      yield call(this.api.get, `${this.base_url}/tree`);
      yield put(list());
    } catch (err) {
      yield put(err());
    }
  }
}
