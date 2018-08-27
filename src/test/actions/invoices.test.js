import uuid from 'uuid';
import { addInvoice, editInvoice, removeInvoice } from '../../actions/invoices';

test('should return remove invoice action object ', () => {
  const action = removeInvoice({ id: '1234' });
  expect(action).toEqual({
    type: 'REMOVE_INVOICE',
    id: '1234'
  })
});

test('should return edit invoice action object ', () => {
  const action = editInvoice('1234', { note: 'kjahdkjafk' });
  expect(action).toEqual({
    type: 'EDIT_INVOICE',
    id: '1234',
    updates: {
      note: 'kjahdkjafk'
    }
  })
});

test('should return add invoice action object for the provided values ', () => {
  const invoiceData = {
    description: 'desc',
    amount: '234',
    createdAt: '1000',
    note: 'note'
  };
  const action = addInvoice(invoiceData);
  expect(action).toEqual({
    type: 'ADD_INVOICE',
    invoice: {
      id: expect.any(String),
      ...invoiceData,
    }
  })
});

test('should return add invoice action object for the default values ', () => {
  const action = addInvoice();
  expect(action).toEqual({
    type: 'ADD_INVOICE',
    invoice: {
      id: expect.any(String),
      description: '',
      note: '',
      createdAt: 0,
      amount: 0
    }
  })
});