import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [addNewExpense, setAddNewExpense] = useState(false);

    const saveExpenseDataHandler = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random().toString(),
        }
        props.addNewExpenseToList(newExpense);
    }

    let showAddNewExpenseForm = (status) => {
        setAddNewExpense(status);
    }

    return (
        <div className='new-expense'>
            {
                !addNewExpense && 
                <div className='new-expense__actions'>
                    <button type='button' onClick={() => showAddNewExpenseForm(true)}>Add new Expense</button>
                </div>
            }
            
            {
                addNewExpense && 
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeButtonAction={showAddNewExpenseForm}/>
            }
        </div>
    );
};

export default NewExpense;