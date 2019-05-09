import React, { Component } from 'react'

export class Expenses extends Component {

  totalExpensePercent = () => {
    if (this.props.incomeTotal() > 0) {
      var percent = Math.round((this.props.expenseTotal() / this.props.incomeTotal()) * 100);
      return percent
    } 
    else {
      return "--"
    }
  }
  render() {
    const {expenseTotal, formatNumber} = this.props
    return (
    <div className="budget__expenses clearfix">
        <div className="budget__expenses--text">Expenses</div>
        <div className="right clearfix">
            <div className="budget__expenses--value">- { formatNumber(expenseTotal()) }</div>
            <div className="budget__expenses--percentage">
              { this.totalExpensePercent() }%
            </div>
        </div>
    </div>
    )
  }
}

export default Expenses
