import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = function (props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = function (enteredExpenseData) {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    // console.log(expenseData);
    props.onSubmitExpense(expenseData);
  };

  const startEditingHandler = function () {
    setIsEditing(true);
  };

  const stopEditingHandler = function () {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onStopEditing={stopEditingHandler}
          onSaveExpenseData={saveExpenseData}
        />
      )}
    </div>
  );
};

export default NewExpense;
