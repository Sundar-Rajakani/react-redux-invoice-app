import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import AddInvoice from '../components/AddInvoice';
import EditInvoice from '../components/EditInvoice';
import Header from '../components/Header';
import Help from '../components/Help';
import InvoiceApp from '../components/InvoiceApp';
import NotFound from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={InvoiceApp} exact={true} />
        <Route path="/add" component={AddInvoice} />
        <Route path="/edit/:id" component={EditInvoice} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
