import React, { Component } from 'react';
import Expenses from './Expenses';
import Income from './Income';



export class Top extends Component {

  displayMonth = () => {
    var now, months, month, year;
    now = new Date();
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = now.getMonth();
    year = now.getFullYear();
    return months[month] + ' ' + year;
  }

  expenseTotal = () => {
    var sum = 0;
    this.props.expenses.forEach(el => {
      sum +=el.val;
    })
    return sum
  }

  budgetTotal = () => {
    return this.props.incomeTotal() - this.expenseTotal()
  }
    
  render() {
    return (
        <div className="top">
        <div className="budget">
            <div className="budget__title">
                Available Budget in <span className="budget__title--month">{ this.displayMonth() }</span>:
            </div>
            
            <div className="budget__value">
              { this.budgetTotal() > 0 ? '+ ' : '- '}
              { this.props.formatNumber(this.budgetTotal()) }
            </div>
            <Income 
              incomeTotal = {this.props.incomeTotal}
              formatNumber = {this.props.formatNumber}
            />
            <Expenses 
              incomeTotal = {this.props.incomeTotal}
              expenseTotal = {this.expenseTotal}
              formatNumber = {this.props.formatNumber}
            />
        </div>
    </div>
    )
  }
}

export default Top
