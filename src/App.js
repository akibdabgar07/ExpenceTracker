//import logo from './logo.svg';
//import './App.css';
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
let dummy_expenses=[];
let localstorageItems = JSON.parse(localStorage.getItem("formData"));
if(localstorageItems == null){
  dummy_expenses=[];

}else{
  dummy_expenses.push(localstorageItems);
} 

const App = () =>{

  
  const [expenses,setExpenses]=useState(dummy_expenses);


  const addExpenseHandler=(expense)=>{
    const updateExpense=[expense, ...expenses]; 
    setExpenses(updateExpense);
  };
  return (


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
<>
<div>
  <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
</div>
<Expenses item={expenses}/>
{/* {
expenses.map((props,i)=>(
  <Expenses {...props} key={i}/>
))
} */}
</>
//     <div className='container'>
//       <h2> Lets get started</h2>
//       array.forEach(expense => {
//           <ExpenseItem 
//           date={expenses[0]} 
//           title={expenses} 
//           amount={expenseamount}/>
//       });
    

// <ExpenseItem 
//       date={expenseDate} 
//       title={expensetitle} 
//       amount={expenseamount}/>
//     </div>
  );
}

export default App;
