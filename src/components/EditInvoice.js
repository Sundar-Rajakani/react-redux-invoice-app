import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editInvoice, removeInvoice } from '../actions/invoices';
import InvoiceForm from './InvoiceForm';



export class EditInvoice extends Component {


  onSubmit = (invoice) => {
    this.props.editInvoice(props.invoice.id, invoice);
    this.props.history.push('/');
  }

  onClick = (e) => {
    this.props.removeInvoice({ id: props.invoice.id });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Edit Invoice</h1>
        <InvoiceForm
          invoice={this.props.invoice}
          onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div >
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    invoice: state.invoices.find((invoice) => invoice.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  editInvoice: (id, invoice) => dispatch(editInvoice(id, invoice)),
  removeInvoice: (data) => dispatch(removeInvoice(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditInvoice);
