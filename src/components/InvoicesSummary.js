import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectInvoicesTotal from '../selectors/invoices-total.js';
import getFilteredInvoices from '../selectors/invoices.js';

export const InvoicesSummary = ({ noOfInvoices, totalOfInvoices }) => {
  return (
    <div>
      <h1>Viewing {noOfInvoices} {noOfInvoices === 1 ? 'invoice' : 'invoices'} , with a total of {numeral(totalOfInvoices / 100).format('$0,0.00')}</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  const invoices = getFilteredInvoices(state.invoices, state.filters);
  return {
    noOfInvoices: invoices.length,
    totalOfInvoices: selectInvoicesTotal(invoices)
  }
}

export default connect(mapStateToProps)(InvoicesSummary);