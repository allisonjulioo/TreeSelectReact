import React, { Component } from 'react';
import TreeNode from './components/TreeNode';

export default class extends Component {
  render() {
    return (
      <div className="app container">
        <h2>Challenge</h2>
        <div className="container">
          <TreeNode />
          <TreeNode />
          <TreeNode />
          <TreeNode />
          <TreeNode />
          <TreeNode />
        </div>
      </div>
    );
  }
}
