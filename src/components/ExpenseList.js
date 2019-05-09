import React, { Component } from 'react'

export class ExpenseList extends Component {
    calcExpPerc = (val) => {
        if (this.props.incomeTotal() > 0) {
            var percent = Math.round((val / this.props.incomeTotal()) * 100);
            return percent
        }
        else {
            return "--"
        }
    }
  render() {
    return (
        this.props.expenses.map( (expense) => 
            <div className="item clearfix" key = {expense.id}>
                <div className="item__description">{ expense.desc }</div>
                <div className="right clearfix">
                    <div className="item__value">-{ this.props.formatNumber(expense.val) }%</div>
                    <div className="item__percentage">{this.calcExpPerc(expense.val)}%</div>
                    <div className="item__delete">
                        <button className="item__delete--btn"
                        onClick = { () => this.props.delExpenseItem(expense.id)}>
                            <i className="ion-ios-close-outline"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    )
  }
}

export default ExpenseList
