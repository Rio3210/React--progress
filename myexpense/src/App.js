import './App.css';
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses=[
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
  return (
    <div>
      <h2>Let's get started</h2>
      
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
 
    
  );
}

export default App;
