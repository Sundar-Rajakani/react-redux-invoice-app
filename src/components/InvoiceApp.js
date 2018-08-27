import React from 'react';

import Invoices from './Invoices';
import InvoiceFilters from './InvoiceFilters';

const InvoiceApp = () => (
  <div>
    <InvoiceFilters />
    <Invoices />
  </div>
);

export default InvoiceApp;