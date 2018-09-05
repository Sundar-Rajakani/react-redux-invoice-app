import React from 'react';
import { shallow } from 'enzyme';
import { InvoiceFilters } from '../../components/InvoiceFilters';
import { InvoicesSummary } from '../../components/InvoicesSummary';

test('shoudl render invoices summary for a single invoice', () => {
  const wrapper = shallow(<InvoicesSummary noOfInvoices={1} totalOfInvoices={235}/>);
  expect(wrapper).toMatchSnapshot();
})

test('shoudl render invoices summary for multiple invocies', () => {
  const wrapper = shallow(<InvoicesSummary noOfInvoices={10} totalOfInvoices={23587687} />);
  expect(wrapper).toMatchSnapshot();
})