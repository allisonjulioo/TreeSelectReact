import React, { PureComponent } from 'react';
import { FaCheck } from 'react-icons/fa';
import './styles.scss';

export interface IPropsCheckBox {
  value: string;
  checked: boolean;
  change: () => void;
}
export default class extends PureComponent<IPropsCheckBox, { checked: boolean }> {
  constructor(props: IPropsCheckBox) {
    super(props);
    this.state = { checked: this.props.checked };
  }
  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    // console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className={`checkbox ${this.props.checked && 'checked'}`}>
        <span className="checkbox__icon">{this.props.checked && <FaCheck size="12" color="white" />}</span>
        <input
          type="checkbox"
          className="checkbox__input"
          checked={this.state.checked}
          value={this.props.value}
          onChange={() => {
            this.props.change();
          }}
        />
      </div>
    );
  }
}
