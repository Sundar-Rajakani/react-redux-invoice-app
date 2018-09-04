import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

import { addInvoice } from './actions/invoices';
import { setTextFilter } from './actions/filters';
import getFilteredInvoices from './selectors/invoices';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configStore();
const invoice1 = store.dispatch(addInvoice({
  description: 'Water Bill',
  note: 'this is note1',
  amount: 234,
  createdAt: 1000
}));

const invoice2 = store.dispatch(addInvoice({
  description: 'Gas Bill',
  note: 'this is note2',
  amount: 235,
  createdAt: -1000
}));

const invoice3 = store.dispatch(addInvoice({
  description: 'Rent',
  note: 'this is note3',
  amount: 236,
  createdAt: 500
}));

store.dispatch(setTextFilter('water'));

const state = store.getState();
const filteredInvoices = getFilteredInvoices(state.invoices, state.filters);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app'));
