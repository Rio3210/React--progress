import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{
    const saveExpenseDate=(enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDate}/>
        </div>
    )
}
export default NewExpense;