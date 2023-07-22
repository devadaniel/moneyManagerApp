// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, amount, type, id} = transactionDetails

  const onClickDeleteTransaction = () => {
    deleteTransaction(id)
  }

  return (
    <li className="transaction-history-details-list">
      <div className="history-items-container">
        <p className="title-type">{title}</p>
        <p className="amount-text">Rs {amount}</p>
        <p className="amount-type">{type}</p>
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={onClickDeleteTransaction}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-button-image"
          />
        </button>
      </div>
      <hr className="separator-1" />
    </li>
  )
}

export default TransactionItem
