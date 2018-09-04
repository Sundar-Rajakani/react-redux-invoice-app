import React from 'react';
import { shallow } from 'enzyme';
import { Invoices } from '../../components/Invoices';
import invoices from '../fixtures/invoices';

test('should render list of invoices with the given data', () => {
  const wrapper = shallow(<Invoices invoices={invoices}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should display a message when there are not invoices', () => {
  const wrapper = shallow(<Invoices invoices={[]}/>);
  expect(wrapper).toMatchSnapshot();
});
