import { createStore, combineReducers } from 'redux';

import InvoicesReducer from '../reducers/invoices';
import FiltersReducer from '../reducers/filters';


export default () => {
  const store = createStore(
    combineReducers({
      invoices: InvoicesReducer,
      filters: FiltersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  );
  return store;
};

