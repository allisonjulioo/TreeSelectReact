import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { IPropsTreeNode } from './../models/PropsTreeNode.interface';
import rootReducer from './ducks/rootReducer';
import { RootSaga } from './ducks/rootSaga';

export interface ApplicationState {
  nodes: IPropsTreeNode;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(new RootSaga().root);

export default store;
