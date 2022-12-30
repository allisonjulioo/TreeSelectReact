import { call, put } from 'redux-saga/effects';
import { NodeService } from '../../../services/nodes';
import { list } from './actions';

export class Sagas extends NodeService {
  public *getNodes() {
    try {
      yield call(this.api.get, `${this.base_url}/tree`);
      yield put(list());
    } catch (err: any) {
      yield put(err());
    }
  }
}
