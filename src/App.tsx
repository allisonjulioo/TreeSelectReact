import React, { Component } from 'react';
import data from './mocks/data';
import TreeView from './components/TreeView';

export default class extends Component {
  render() {
    return (
      <div className="container">
        <h2>Challenge</h2>
        <div className="container content-node">
          <TreeView nodes={data} />
        </div>
      </div>
    );
  }
}
