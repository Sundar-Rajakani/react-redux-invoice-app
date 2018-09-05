import moment from 'moment';
import invoices from '../fixtures/invoices';

export default [{
  id: '1',
  description: 'desc1',
  amount: 0,
  note: 'note1',
  createdAt: 0
}, {
  id: '2',
  description: 'desc2',
  amount: 1,
  note: 'note2',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'desc3',
  amount: 2,
  note: 'note3',
  createdAt: moment(0).add(4, 'days').valueOf()
}];
