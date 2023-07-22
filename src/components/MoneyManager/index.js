import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const filteredTransactionList = transactionList.filter(
      each => each.id !== id,
    )
    this.setState({
      transactionList: filteredTransactionList,
    })
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onChangeTitleInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmountInput = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state

    const optionType = transactionTypeOptions.find(
      eachOption => eachOption.optionId === optionId,
    )

    const {displayText} = optionType
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    const balanceAmount = this.getBalance()

    return (
      <div className="app-main-container">
        <div className="app-name-card-container">
          <h1 className="name-heading">Hi, Richard</h1>
          <p className="description">
            Welcome back to your
            <span className="money-manager">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
          balanceAmount={balanceAmount}
        />
        <div className="transaction-history-container">
          <form
            className="add-transaction-form-container"
            onSubmit={this.onAddTransaction}
          >
            <div className="input-form-container">
              <h1 className="add-transaction-heading">Add Transaction</h1>
              <label htmlFor="title" className="label-text">
                TITLE
              </label>
              <input
                type="text"
                value={titleInput}
                id="title"
                className="title-input-box"
                placeholder="Title"
                onChange={this.onChangeTitleInput}
              />
              <label htmlFor="amount" className="label-text">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                value={amountInput}
                className="title-input-box"
                placeholder="Amount"
                onChange={this.onChangeAmountInput}
              />
              <label htmlFor="type" className="label-text">
                TYPE
              </label>
              <select
                id="type"
                className="select-input-box"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option
                    key={eachOption.optionId}
                    value={eachOption.optionId}
                    className="options"
                  >
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="history-heading">History</h1>
            <div className="history-table-container">
              <ul className="transaction-table-items">
                <li className="table-items-container">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                </li>
                <hr className="separator" />
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
