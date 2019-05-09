import React, { Component } from 'react';
import Top from './components/Top';
import BudgetForm from './components/BudgetForm'
import Bottom from './components/Bottom';
// import uuid from 'uuid';
import './App.css';

// test
export class App extends Component {
  state = {
    income: [],
    expenses: []
  }
  
  handleAddItem = (type, desc, val, id) => {
      this.setState( prevState => {
        if (type === 'inc') {
          return {
            income: [
              ...prevState.income,
              {
              desc: desc,
              val: val,
              id: id
              }
            ]
          }
        }
        else if (type === 'exp') {
          return {
            expenses: [
              ...prevState.expenses,
              {
                desc: desc,
                val: val,
                id: id
              }
            ]
          }
        }
      })
  }

  // TODO remove element
  delIncomeItem = (id) => {
    this.setState( prevState => {
      return {
        income: prevState.income.filter(i => i.id !== id)
      }
    });
  }

  delExpenseItem = (id) => {
    this.setState( prevState => {
      return {
        expenses: prevState.expenses.filter(i => i.id !== id)
      }
    });
  }

  incomeTotal = () => {
    var sum = 0;
    this.state.income.forEach(el => {
      sum += el.val;
      })
    return sum
  }


  formatNumber = (num, type) => {
    var numSplit, int, dec;
        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
        }

        dec = numSplit[1];

        return int + '.' + dec;
  }

  render() {
    console.log(this.state);
    return (
      <div className = "App">
        <Top 
          income = {this.state.income}
          incomeTotal = {this.incomeTotal}
          expenses = {this.state.expenses}
          formatNumber = {this.formatNumber}
        />
        <BudgetForm addItem = {this.handleAddItem}/>
        <Bottom 
          income = {this.state.income}
          incomeTotal = {this.incomeTotal}
          delIncomeItem = {this.delIncomeItem}
          delExpenseItem = {this.delExpenseItem}
          expenses = {this.state.expenses}
          formatNumber = {this.formatNumber}
        />
      </div>
    )
  }
}

export default App



