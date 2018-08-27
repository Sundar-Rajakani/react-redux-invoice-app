import React from 'react';
import { connect } from 'react-redux';

import { editInvoice, removeInvoice } from '../actions/invoices';
import InvoiceForm from './InvoiceForm';


const EditInvoice = (props) => {
  return (
    <div>
      <h1>Edit Invoice</h1>
      <InvoiceForm
        invoice={props.invoice}
        onSubmit={(invoice) => {
          props.dispatch(editInvoice(props.invoice.id, invoice));
          props.history.push('/');
        }} />
      <button onClick={(e) => {
        props.dispatch(removeInvoice({ id: props.invoice.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    invoice: state.invoices.find((invoice) => invoice.id === props.match.params.id)
  }
}
export default connect(mapStateToProps)(EditInvoice);
