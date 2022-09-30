import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random().toString(),
        }
        props.addNewExpenseToList(newExpense);
    }
    return (
        <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpense;