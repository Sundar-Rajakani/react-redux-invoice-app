import moment from 'moment';

import FiltersReducer from '../../reducers/filters';

test('should set default filter values', () => {
  const state = FiltersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy value to amount', () => {
  const state = FiltersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});


test('should set sortBy value to date', () => {
  const currentState = {
    text: '',
    sortBY: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const action = { type: 'SORT_BY_DATE' };
  const state = FiltersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text value to filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'test'
  }
  const state = FiltersReducer(undefined, action);
  expect(state.text).toBe('test');
});

test('should set start date value to filter', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: 0
  }
  const state = FiltersReducer(undefined, action);
  expect(state.startDate).toBe(0);
});

test('should set end date value to filter', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: 0
  }
  const state = FiltersReducer(undefined, action);
  expect(state.endDate).toBe(0);
});