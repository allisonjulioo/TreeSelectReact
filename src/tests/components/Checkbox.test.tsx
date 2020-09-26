/* eslint-disable no-undef */
import React from "react";
import CheckBox from "../../components/CheckBox/index";
import { shallow } from "enzyme";

const renderComponent = (props = {}) => shallow(<CheckBox />);

describe("<CheckBox/>", () => {
  beforeEach(() => {});
  it("renders the component", () => {
    const component = shallow(<CheckBox />);
    expect(component).toMatchSnapshot();
  });
  it("should match the snapshot", () => {
    expect(CheckBox).toMatchSnapshot();
  });
  it("should checkbox alredy changed to checked", () => {
    const wrapper = renderComponent();
    wrapper.simulate("change", { target: { checked: false } });
  });
});
