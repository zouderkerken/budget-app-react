import React, { Component } from 'react';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';


export class Bottom extends Component {

  // renderIncomeList = () => {
  //   if (this.props.income[0].val > 0) {
  //     return <IncomeList 
  //             income = {this.props.income}
  //             formatNumber = {this.props.formatNumber}
  //             delIncomeItem = {this.props.delIncomeItem} />
  //   }
  // }
  render() {
    return (
      <div className="bottom">
        <div className="container clearfix">
          <div className="income">
              <h2 className="icome__title">Income</h2>
              <div className="income__list">
              <IncomeList 
                income = {this.props.income}
                formatNumber = {this.props.formatNumber}
                delIncomeItem = {this.props.delIncomeItem} />
              </div>
          </div>

            <div className="expenses">
              <h2 className="expenses__title">Expenses</h2>
              <div className="expenses__list">
                  <ExpenseList 
                    expenses = {this.props.expenses}
                    incomeTotal = {this.props.incomeTotal}
                    formatNumber = {this.props.formatNumber}
                    delExpenseItem = {this.props.delExpenseItem}
                  />
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottom
