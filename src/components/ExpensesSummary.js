import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total'

export class ExpensesSummary extends React.Component {
  render() {
    return (
      <p>Viewing {this.props.expensesCount} {this.props.expensesCount === 1 ? 'expense' : 'expenses'} totalling {numeral(this.props.expensesTotal/100).format('$0,00.00')}</p>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    expensesCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
