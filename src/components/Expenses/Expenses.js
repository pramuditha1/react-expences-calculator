import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  const [selectedValue, setSelectedValue] = useState("2022");

  const handleOnChangeFilter = (selectedYear) => {
    setSelectedValue(selectedYear);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedValue
  })

  return (
    <Card className="expenses">
      <ExpensesFilter onChangeFilter={handleOnChangeFilter} selected={selectedValue}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;