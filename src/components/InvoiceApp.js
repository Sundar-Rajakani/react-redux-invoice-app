import React from 'react';

import Invoices from './Invoices';
import InvoicesSummary from './InvoicesSummary'
import InvoiceFilters from './InvoiceFilters';

const InvoiceApp = () => (
  <div>
    <InvoicesSummary />
    <InvoiceFilters />
    <Invoices />
  </div>
);

export default InvoiceApp;