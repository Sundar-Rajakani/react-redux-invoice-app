import React from 'react';
import { connect } from 'react-redux';

import getFilteredInvoices from '../selectors/invoices';
import Invoice from './Invoice';

export const Invoices = (props) => (
  <div>
    <h1>Invoices </h1>
    {
      props.invoices.length === 0 ? (
        <p>No Invoices found</p>
      ) : (
        props.invoices.map((invoice) => {
          return <Invoice key={invoice.id} {...invoice} />
        })
      )
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    invoices: getFilteredInvoices(state.invoices, state.filters)
  }
}

export default connect(mapStateToProps)(Invoices);

