import React, { PureComponent } from 'react';
import './styles.scss';
import { IPropsTreeNode } from '../../models/PropsTreeNode.interface';
import TreeNode from '../TreeNode';

export interface ITreeViewState {
  nodes: IPropsTreeNode[];
}

export default class extends PureComponent<any, any> {
  constructor(props: ITreeViewState) {
    super(props);
    this.state = {
      nodes: this.props.nodes,
    };
  }

  render() {
    const { nodes } = this.state;
    return (
      <div>
        {Object.values(nodes).map((node: any) => (
          <TreeNode {...node} key={node.id} />
        ))}
      </div>
    );
  }
}
