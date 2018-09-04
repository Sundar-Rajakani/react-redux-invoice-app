import React from 'react';
import { shallow } from 'enzyme';
import { EditInvoice } from '../../components/EditInvoice';
import invoices from '../fixtures/invoices';

let editInvoiceSpy, removeInvoiceSpy, historySpy, wrapper;

beforeEach(() => {
  editInvoiceSpy = jest.fn();
  removeInvoiceSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(<EditInvoice editInvoice={editInvoiceSpy}
    removeInvoice={removeInvoiceSpy}
    history={historySpy}
    invoice={invoices[1]}
  />);
});


test('should render edit invoice', () => {
  expect(wrapper).toMatchSnapshot();
});


test('should handle edit invoice', () => {
  wrapper.find('InvoiceForm').prop('onSubmit')(invoices[1]);
  expect(historySpy.push).toHaveBeenCalledWith('/');
  expect(editInvoiceSpy).toHaveBeenLastCalledWith(invoices[1].id, invoices[1]);
})


test('should handle remove invoice', () => {
  wrapper.find('button').simulate('click');
  expect(historySpy.push).toHaveBeenCalledWith('/');
  expect(removeInvoiceSpy).toHaveBeenLastCalledWith({ id: invoices[1].id });

})