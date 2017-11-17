import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('it should properly render with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={9434} />);
  expect(wrapper).toMatchSnapshot()
})

test('it should properly render with 0 or more than one expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={9434} />);
  expect(wrapper).toMatchSnapshot()
})
