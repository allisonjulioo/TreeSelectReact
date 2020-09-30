import { IPropsTreeNode } from '../../../models/PropsTreeNode.interface';
import { Reducer } from 'redux';
import { TNodes } from './types';

let INITIAL_STATE: IPropsTreeNode = {
  name: '',
  toggled: false,
  checked: false,
  children: {} as any,
};

const reducer: Reducer<{}> = (state = INITIAL_STATE, action: { type: string }) => {
  switch (action.type) {
    case TNodes.GET:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
