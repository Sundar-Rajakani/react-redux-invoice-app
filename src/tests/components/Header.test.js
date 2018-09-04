import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


test('should render header correctly', () => {
  // const renderer = new ReactShallowRenderer();
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});