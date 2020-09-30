import React, { PureComponent } from 'react';
import { FaCheck } from 'react-icons/fa';
import './styles.scss';
import { IPropsCheckBox } from '../../models/PropsCheckBox.interface';

export default class extends PureComponent<IPropsCheckBox, IPropsCheckBox> {
  constructor(props: IPropsCheckBox) {
    super(props);
    this.state = {
      ...this.props,
      checked: this.props.checked || false,
    };
  }
  componentDidUpdate(props: IPropsCheckBox) {
    console.log(props);
  }
  render() {
    const { checked, name } = this.props;
    return (
      <div className={`checkbox ${checked && 'checked'}`}>
        <span className="checkbox__icon">{checked && <FaCheck size="12" color="white" />}</span>
        <input
          type="checkbox"
          className="checkbox__input"
          checked={checked}
          value={name}
          onChange={() => {
            this.setState({
              checked: !this.state.checked,
            });
            this.state.change(this.state.checked);
          }}
        />
      </div>
    );
  }
}
