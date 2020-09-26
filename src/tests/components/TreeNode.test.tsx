import React from "react";
import TreeNode from "../../components/TreeNode";
// import data from "./mocks/tree";
import { shallow } from "enzyme";

const renderComponent = (props = {}) => shallow(<TreeNode />);

describe("<TreeNode/>", () => {
  it("should match default snapshot", () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });
  it("renders the component", () => {
    const component = shallow(<TreeNode />);
    expect(component).toMatchSnapshot();
  });
});
