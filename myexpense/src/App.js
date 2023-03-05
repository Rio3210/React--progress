import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const InitialExpenses=[
  {
    id:'e1',
    title:'Tissue',
    amount:45.50,
    date: new Date(2023, 4, 14),
  },
  {
    id:'e2',
    title:'Transportation',
    amount:540,
    date: new Date(2023, 2, 2),
  },
  {
    id:'e3',
    title:'Electric',
    amount:115.45,
    date: new Date(2023, 4, 14),
  },
  {
    id:'e4',
    title:'Milk',
    amount:30,
    date: new Date(2023, 1, 2),
  },
]
function App() {
  const [expenses,setExpenses]=useState(InitialExpenses);
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
      
      <Expenses items={expenses}/>
    </div>
 
    
  );
}

export default App;
