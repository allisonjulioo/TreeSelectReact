import React, { Component } from 'react';
import CheckBox from '../CheckBox';

export default class extends Component {
  render() {
    return (
      <label className="tree-node">
        <CheckBox />
        <span>Nome do node</span>
      </label>
    );
  }
}
