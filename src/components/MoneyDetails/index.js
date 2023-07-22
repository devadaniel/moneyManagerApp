// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expensesAmount, balanceAmount} = props
  return (
    <div className="money-details-cards">
      <div className="money-card-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div>
          <p className="your-balance">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            RS {balanceAmount}
          </p>
        </div>
      </div>
      <div className="money-card-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div>
          <p className="your-balance">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            RS {incomeAmount}
          </p>
        </div>
      </div>
      <div className="money-card-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div>
          <p className="your-balance">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            RS {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
