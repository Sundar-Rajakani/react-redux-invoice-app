import InvoicesReducer from '../../reducers/invoices'
import invoices from '../fixtures/invoices';


test('should set default values in state', () => {
  const state = InvoicesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});


test('should remove invoice by id', () => {
  const action = {
    type: 'REMOVE_INVOICE',
    id: invoices[1].id
  }
  const state = InvoicesReducer(invoices, action);
  expect(state).toEqual([invoices[0], invoices[2]]);
});


test('should not remove invoice if not present', () => {
  const action = {
    type: 'REMOVE_INVOICE',
    id: 34343
  }
  const state = InvoicesReducer(invoices, action);
  expect(state).toEqual(invoices);
});

test('should add an expense', () => {
  const invoice = {
    description: 'desc4',
    note: 'note4',
    id: 4,
    createdAt: 2000,
    amount: 295
  }
  const action = {
    type: 'ADD_INVOICE',
    invoice
  }
  const state = InvoicesReducer(invoices, action);
  expect(state).toEqual([...invoices, invoice]);
});

test('should edit an expense', () => {
  const amount = 0;
  const action = {
    type: 'EDIT_INVOICE',
    id: invoices[1].id,
    updates: {
      amount
    }
  }
  const state = InvoicesReducer(invoices, action);
  expect(state[1].amount).toBe(amount);
});

test('should not  edit an expense if id not found', () => {
  const amount = 0;
  const action = {
    type: 'EDIT_INVOICE',
    id: -1,
    updates: {
      amount
    }
  }
  const state = InvoicesReducer(invoices, action);
  expect(state).toEqual(invoices);
});