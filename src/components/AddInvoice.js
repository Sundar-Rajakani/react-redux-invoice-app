import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addInvoice } from '../actions/invoices'
import InvoiceForm from './InvoiceForm';


export class AddInvoice extends Component {

  onSubmit = (invoice) => {
    this.props.addInvoice(invoice);  
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Invoice Form</h1>
        <InvoiceForm
          onSubmit={this.onSubmit} />
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  addInvoice: (invoice) => dispatch.addInvoice(invoice)
})
export default connect(undefined, mapDispatchToProps)(AddInvoice);
