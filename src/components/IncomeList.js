import React, { Component } from 'react'

export class IncomeList extends Component {

  render() {
    return (
        this.props.income.map( (income) => 
            <div className="item clearfix" key = {income.id}>
                <div className="item__description">{ income.desc }</div>
                <div className="right clearfix">
                    <div className="item__value">+ { this.props.formatNumber(income.val) }</div>
                    <div className="item__delete">
                        <button className="item__delete--btn"
                        onClick = { () => this.props.delIncomeItem(income.id)}>
                            <i className="ion-ios-close-outline"></i>
                        </button>
                    </div>
                </div>
            </div>   
        )
    )
  }
}

export default IncomeList
