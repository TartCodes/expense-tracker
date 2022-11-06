import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

//   const [userInput, setUserInput] = useState({ <-- object way
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const titleChangeHandler = (e) => {
    // setUserInput((prevState) => { <-- good practice
    //     return ({...prevState, enteredTitle: e.target.value,})
        setEnteredTitle(e.target.value)
    }
  const amountChangeHandler = (e) => {
    // setUserInput({
    //     ...userInput, <--- works but not great
    //     enteredAmount: e.target.value,
    //   });
    setEnteredAmount(e.target.value)
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2023-01-01"
            step="2026-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
