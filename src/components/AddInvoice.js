import React from 'react';
import { connect } from 'react-redux';

import { addInvoice } from '../actions/invoices'
import InvoiceForm from './InvoiceForm';

const AddInvoice = (props) => (
  <div>
    <h1>Invoice Form</h1>
    <InvoiceForm
      onSubmit={(invoice) => {
        props.dispatch(addInvoice(invoice))
        props.history.push('/');
      }} />
  </div>
);

export default connect()(AddInvoice);
