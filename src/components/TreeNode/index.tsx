import React, { Component, MouseEvent } from 'react';
import TreeNode from './';
import CheckBox from '../CheckBox';
import { IPropsTreeNode } from '../../models/PropsTreeNode.interface';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './styles.scss';

/**
 * @param TreeNode
 */
export default class extends Component<IPropsTreeNode, IPropsTreeNode> {
  constructor(props: IPropsTreeNode) {
    super(props);
    this.state = {
      ...this.props,
    };
  }
  private toogleAccordion = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState((prevState: IPropsTreeNode) => ({
      toggled: !prevState.toggled,
      checked: prevState.checked,
    }));
  };

  private checkboxChanged = (node: IPropsTreeNode = this.state): void => {
    if (node && node.children) {
      for (let i = 0, l = node.children.length; i < l; ++i) {
        const child = node.children[i];
        child.checked = node.checked;
        if (!child.id) {
          child.id = node.id || '0';
        }
        this.checkboxChanged(child);
        this.setState({ ...node, checked: !node.checked });
      }
    }
  };
  render() {
    return (
      <div className="step-node">
        <label className="step-node__tree">
          <CheckBox value={this.state.name} checked={this.state.checked} change={() => this.checkboxChanged()} />
          <span>{this.state.name}</span>
          {this.state.children.length > 0 && (
            <button className="step-node__action" onClick={(event) => this.toogleAccordion(event)}>
              {this.state.toggled ? <FaChevronUp color="#00b4f0" /> : <FaChevronDown />}
            </button>
          )}
        </label>

        <div className={`step-node__children ${this.state.toggled ? 'oppened' : 'collapsed'}`}>
          {this.state.children.length > 0 &&
            this.state.children.map((children) => <TreeNode {...children} key={children.id} />)}
        </div>
      </div>
    );
  }
}
