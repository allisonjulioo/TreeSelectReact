import { IPropsTreeNode } from '../models/PropsTreeNode.interface';

export const arrNode = (object: string, node: IPropsTreeNode): any[] => {
  if (node) {
    switch (object) {
      case 'keys':
        return Object.keys(node);
      case 'values':
        return Object.values(node);
      default:
        return [];
    }
  }
  return [];
};
