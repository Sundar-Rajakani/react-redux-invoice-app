import React from 'react';
import { shallow } from 'enzyme';
import InvoiceApp from '../../components/InvoiceApp';

test('should render Invoice App page ', () => {
  const wrapper = shallow(<InvoiceApp />);
  expect(wrapper).toMatchSnapshot();
});