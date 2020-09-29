import React, { Component } from 'react';
import TreeNode from './components/TreeNode';
import mock from './mocks/tree';

export default class extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <h2>Challenge</h2>
        <div className="container content-node">
          {[mock].map((data) => (
            <TreeNode {...data} key={data.id} />
          ))}
        </div>
      </div>
    );
  }
}
