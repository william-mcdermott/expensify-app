import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    description: 'Lunch',
    note: '',
    amount: 2500,
    createdAt: 1000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = {
    note: 'New note value'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '2',
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], {...expenses[1], note: 'New note value'}, expenses[2]]);
})

test('should not edit an expense if expense not found', () => {
  const updates = {
    note: 'New note value'
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1a2b3c',
    updates
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})
