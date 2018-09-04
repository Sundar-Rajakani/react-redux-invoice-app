import React from 'react';
import { shallow } from 'enzyme';
import { AddInvoice } from '../../components/AddInvoice';
import invoices from '../fixtures/invoices';

let addInvoiceSpy, historySpy, wrapper;

beforeEach(() => {
  addInvoiceSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(<AddInvoice addInvoice={addInvoiceSpy} history={historySpy} />);
});

test('should render add invoice', () => {
  expect(wrapper).toMatchSnapshot();
});


test('should handle onSubmit', () => {
  wrapper.find('InvoiceForm').prop('onSubmit')(invoices[1]);
  expect(historySpy.push).toHaveBeenCalledWith('/');
})