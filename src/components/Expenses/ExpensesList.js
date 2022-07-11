import "./ExpensesList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = function (props) {
  let expensesContent = <p>No expenses found.</p>;

  if (props.item.length === 0)
    return <h2 className="expenses-list__fallback">Found no expenses </h2>;
  expensesContent = props.item.map((expense, index) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  ));
  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
