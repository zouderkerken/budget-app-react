import React, { Component } from 'react';
import uuid from 'uuid';

const INITIAL_STATE = {
  type: 'inc',
  desc: '',
  amount: '',
  id: ''
}

export class BudgetForm extends Component {
  state = INITIAL_STATE;

  setDesc = (ev) => {
    this.setState({ desc: ev.target.value })
  }

  setId = () => {
    return uuid.v4();
  } 

  setAmt = (ev) => {
    this.setState({ amount: ev.target.value })
  }

  setType = (ev) => {
    this.setState({type: ev.target.value});
    INITIAL_STATE.type= ev.target.value;
  }

  expStyle = () => {
    if (INITIAL_STATE.type === 'exp') {
      return 'red-focus'
    } else {
      return null
    }
  }

  onSubmit = (ev) => {
    ev.preventDefault()
    const value = Number(this.state.amount)
    const desc = this.state.desc
    const type = this.state.type
    const id = this.setId();

    if (desc && value !== 0) {
      this.props.addItem(type, desc, value, id)
      // clear the state
      this.setState(INITIAL_STATE)
    }
  }

  render() {
    return (
    <div className="add">
        <form className="add__container" onSubmit={this.onSubmit}>
            <select onChange={this.setType} className= {"add__type " + this.expStyle()}>
                {console.log(INITIAL_STATE.type)}
                <option value = "inc">+</option>
                <option value="exp">-</option>
            </select>
            <input 
              type="text" 
              onChange={this.setDesc}
              value={this.state.desc} 
              className={"add__description " + this.expStyle()}
              placeholder="Add description" 
            />
            <input 
            type="number" 
            value = {this.state.amount}
            className={ "add__value " + this.expStyle() } 
            onChange={this.setAmt}
            placeholder="Value"/>
            <button className={"add__btn " + (INITIAL_STATE.type === 'exp'? 'red': null)}> 
              <i className="ion-ios-checkmark-outline"></i>
            </button>
        </form>
    </div>
    )
  }
}

export default BudgetForm
