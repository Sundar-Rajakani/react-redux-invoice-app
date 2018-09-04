import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import InvoiceForm from '../../components/InvoiceForm';
import invoices from '../fixtures/invoices';


test('should render invoice form correctly', () => {
  const wrapper = shallow(<InvoiceForm />);
  expect(wrapper).toMatchSnapshot();
});


test('should render invoice form with the provided data', () => {
  const wrapper = shallow(<InvoiceForm invoice={invoices[1]} />);
  expect(wrapper).toMatchSnapshot();
});


test('should diplay error for invalid data', () => {
  const wrapper = shallow(<InvoiceForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();

});


test('should set description on input change', () => {
  const value = 'value1';
  const wrapper = shallow(<InvoiceForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should call onSubmit function on form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<InvoiceForm invoice={invoices[1]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: invoices[1].description,
    amount: invoices[1].amount,
    note: invoices[1].note,
    createAt: invoices[1].createAt

  });
});


test('should set new date on date change', ()=> {
  const now = moment();
  const wrapper = shallow(<InvoiceForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendarFocused on focus change of date field', ()=> {
  const focused = true
  const wrapper = shallow(<InvoiceForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toBe(focused);
});