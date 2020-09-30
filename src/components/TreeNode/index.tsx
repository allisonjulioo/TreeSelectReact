import React, { Component, MouseEvent } from 'react';
import TreeNode from './';
import CheckBox from '../CheckBox';
import { IPropsTreeNode } from '../../models/PropsTreeNode.interface';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './styles.scss';
import { arrNode } from '../../utils/nodeArr';

/**
 * @param TreeNode
 */
export default class extends Component<IPropsTreeNode, IPropsTreeNode> {
  constructor(props: IPropsTreeNode) {
    super(props);
    this.state = {
      ...this.props,
    };
    this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this);
    this.handleCheckChildren = this.handleCheckChildren.bind(this);
  }
  private handleToogleAccordion(event: MouseEvent): void {
    event.preventDefault();
    this.setState((prevState: IPropsTreeNode) => ({
      toggled: !prevState.toggled,
      checked: prevState.checked,
    }));
  }

  private handleChangeCheckBox(checked: boolean): void {
    let node = this.state;
    node = { ...node, checked: !checked };
    if (arrNode('keys', node.children).length > 0) {
      this.handleCheckChildren(node, !checked);
    }
    this.setState({ ...node, checked });
  }

  private handleCheckChildren(node: IPropsTreeNode, parent: boolean) {
    arrNode('values', node.children).forEach((child) => {
      if (arrNode('keys', child.children).length > 0) {
        child.checked = parent;
        return this.handleCheckChildren(child, parent);
      }
      child.checked = parent;
      return child;
    });
  }

  render() {
    const { name, children, toggled } = this.state; 
    return (
      <div className="step-node">
        <label className="step-node__tree">
          <CheckBox {...this.state} change={this.handleChangeCheckBox} />
          <span>{name}</span>
          {arrNode('keys', children).length > 0 && (
            <button className="step-node__action" onClick={(event) => this.handleToogleAccordion(event)}>
              {toggled ? <FaChevronUp color="#00b4f0" /> : <FaChevronDown />}
            </button>
          )}
        </label>
        {this.renderChildrens()}
      </div>
    );
  }

  private renderChildrens() {
    const { toggled, ...node } = this.state;
    return (
      <div className={`step-node__children ${toggled ? 'oppened' : 'collapsed'}`}>
        {arrNode('keys', node.children).length > 0 &&
          arrNode('values', node.children).map((children) => <TreeNode {...children} key={children.id} />)}
      </div>
    );
  }
}
