import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => (
  <header>
    <h1>Invoice Management</h1>
    <NavLink to="/" activeClassName="isActive" exact={true}>Home</NavLink>
    <NavLink to="/add" activeClassName="isActive">AddInvoice</NavLink>
    <NavLink to="/help" activeClassName="isActive">Help</NavLink>
  </header>
);

export default Header;
