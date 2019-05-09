import React, { Component } from 'react'

export class Income extends Component {
  render() {
    // destructure props
    const {incomeTotal, formatNumber} = this.props;

    return (
    <div className="budget__income clearfix">
        <div className="budget__income--text">Income</div>
        <div className="right">
            <div className="budget__income--value">+ { formatNumber(incomeTotal()) }</div>
            <div className="budget__income--percentage">&nbsp;</div>
        </div>
    </div>
    )
  }
}

export default Income
