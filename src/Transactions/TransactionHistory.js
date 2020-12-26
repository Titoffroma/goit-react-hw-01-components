import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.scss";

const Transaction = ({ type, amount, currency }) => (
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);
Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

const TransactionsHisory = ({ data }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {data.map((transaction) => (
        <Transaction key={transaction.id} {...transaction} />
      ))}
    </tbody>
  </table>
);

TransactionsHisory.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TransactionsHisory;
