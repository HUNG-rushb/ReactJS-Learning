// import ExpenseDate from "./ExpenseDate";
// import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

function ExpenseItemList(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Filter method
  const filteredExpenses = props.item.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <h1>Expense list</h1>

      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangedHandler}
      />

      <ExpensesChart expenses={filteredExpenses} />

      {/* Generate the expenses list*/}
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default ExpenseItemList;
