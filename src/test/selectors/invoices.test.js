import moment from 'moment';
import getFilteredInvoices from '../../selectors/invoices';
import invoices from '../fixtures/invoices';


test('should filter by text value', () => {
  const filters = { text: '1', sortBy: 'date', startDate: undefined, endDate: undefined };
  const result = getFilteredInvoices(invoices, filters)
  expect(result).toHaveLength(1);
});

test('should sort by date', () => {
  const filters = { text: '', sortBy: 'date', startDate: undefined, endDate: undefined };
  const result = getFilteredInvoices(invoices, filters)
  expect(result).toHaveLength(3);
  expect(result).toEqual([invoices[2], invoices[0], invoices[1]]);
});

test('should sort by amount', () => {
  const filters = { text: '', sortBy: 'amount', startDate: undefined, endDate: undefined };
  const result = getFilteredInvoices(invoices, filters)
  expect(result).toHaveLength(3);
  expect(result).toEqual([invoices[2], invoices[1], invoices[0]]);
});

test('should filter by start date', () => {
  const filters = { text: '', sortBy: 'date', startDate: moment(0), endDate: undefined };
  const result = getFilteredInvoices(invoices, filters)
  expect(result).toHaveLength(2);
});

test('should filter by end date', () => {
  const filters = { text: '', sortBy: 'date', startDate: undefined, endDate: moment(0).add(2, 'days') };
  const result = getFilteredInvoices(invoices, filters)
  expect(result).toHaveLength(2);
}); 