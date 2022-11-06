import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => { //this function is used to communicate with the parent comp. NewExpense
            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString() //not perfect but gens a random id; could end up duplicating 
            }
            console.log(expenseData);
            props.onAddExpense(expenseData)
    }

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense