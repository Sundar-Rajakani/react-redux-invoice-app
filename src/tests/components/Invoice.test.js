import React from 'react';
import { shallow } from 'enzyme';
import { Invoice } from '../../components/Invoice';
import invoices from '../fixtures/invoices';

test('should render individual invoice items', () => {
  const wrapper = shallow(<Invoice invoice={invoices[1]}/>);
  expect(wrapper).toMatchSnapshot();
});