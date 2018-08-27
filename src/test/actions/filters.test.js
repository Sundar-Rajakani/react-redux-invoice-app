import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';


test('should return set text filter action object for the provided values', () => {
  const action = setTextFilter('rent');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  })
});

test('should return set text filter action object for the default values', () => {
  const action = setTextFilter('');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
});

test('should return sortByAmount filter action object', () => {
  const action = sortByAmount('amount');
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
});

test('should return sortByDate action object', () => {
  const action = sortByDate('');
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  })
});

test('should return setStartDate action object', () => {
  const action = setStartDate(1234);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: 1234
  })
});

test('should return setEndDate action object', () => {
  const action = setEndDate(2345);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: 2345
  })
});