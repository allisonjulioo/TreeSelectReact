import { IPropsTreeNode } from './../models/PropsTreeNode.interface';
import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/rootReducer';
import { RootSaga } from './ducks/rootSaga';

export interface ApplicationState {
  nodes: IPropsTreeNode;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(new RootSaga().root);

export default store;
