import React, { Component } from 'react';
import TreeView from './components/TreeView';
import data from './mocks/data';

export default class extends Component {
  render() {
    return (
      <div className="container">
        <h2>Dropdown Three Select</h2>
        <div className="container content-node">
          <TreeView nodes={data} />
        </div>
      </div>
    );
  }
}
