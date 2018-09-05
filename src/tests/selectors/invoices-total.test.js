import selectInvoicesTotal from '../../selectors/invoices-total.js';
import invoices from '../fixtures/invoices';

test('should return 0 if no invoices', () => {
  const result = selectInvoicesTotal([]);
  expect(result).toBe(0);
});

test('should add multiple invoices', () => {
  const result = selectInvoicesTotal(invoices);
  expect(result).toBe(3);
});