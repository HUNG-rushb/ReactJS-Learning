// import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  // Insert to data in App.js
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Generate new expense
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);

    // In App.js
    props.onAddExpense(expenseData);

    // close add form
    setIsEditing(false);

    // alert("Add expense successfully!");
  };

  return (
    <div className="new-expense">
      <h1>ADD NEW EXPENSE !</h1>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
