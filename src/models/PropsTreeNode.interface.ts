export interface IPropsTreeNode {
  name: string;
  id?: string;
  toggled: boolean;
  checked: boolean;
  children: IPropsTreeNode;
  changeCheckBox?: (args: IPropsTreeNode) => any;
}
