import invoices from "../tests/fixtures/invoices";

export default (invoices) => {
  if (invoices.length === 0) {
    return 0;
  }
  else {
    return invoices
      .map((invoice) => invoice.amount)
      .reduce((sum, value) => {
        return sum + value;
      }, 0);
  }
} 