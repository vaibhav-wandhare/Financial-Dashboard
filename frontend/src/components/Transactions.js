import React from "react";
import { useSelector } from "react-redux";

const Transactions = () => {
  const transactions = useSelector((state) => state.finance.transactions);

  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>{tx.date} - {tx.type}: ${tx.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
