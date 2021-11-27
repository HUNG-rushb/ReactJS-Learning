import React, { useState } from "react";
import ExpenseItemList from "./Components/Expenses/ExpenseItemList";
import NewExpense from "./Components/Newexpense/NewExpense";
// import Test from "./Components/AddNewExpenseButton/AddNewExpenseButton";

const DUMMY = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* <Test /> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItemList item={expenses} />
    </div>
  );
}

export default App;
