import React from 'react';
import TreeNode from '../../components/TreeNode';
import data from '../../mocks/data';
import { shallow } from 'enzyme';

const renderComponent = (props = { ...data }) => shallow(<TreeNode {...props as any} />);

describe('<TreeNode/>', () => {
  it('should match default snapshot', () => {
    const wrapper = renderComponent();
    expect(wrapper).toMatchSnapshot();
  });
});
