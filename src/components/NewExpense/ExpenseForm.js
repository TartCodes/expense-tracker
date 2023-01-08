import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");
	// const [cancelButton, setCancelButton] = useState("")
	console.log(props);
	//   const [userInput, setUserInput] = useState({ <-- object way (combined approach vs the above listing each useState 1 at a time)
	//     enteredTitle: "",
	//     enteredAmount: "",
	//     enteredDate: "",
	//   });

	const titleChangeHandler = (e) => {
		// setUserInput((prevState) => { <-- good practice
		//     return ({...prevState, enteredTitle: e.target.value,})
		setEnteredTitle(e.target.value);
	};
	const amountChangeHandler = (e) => {
		// setUserInput({
		//     ...userInput, <--- works but not great
		//     enteredAmount: e.target.value,
		//   });
		setEnteredAmount(e.target.value);
	};
	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate + "T00:00")
		};
		props.onSaveExpenseData(expenseData); //this is how child talks to parent comp

		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label htmlFor="">Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Amount</label>
					<input
						type="number"
						value={enteredAmount}
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label htmlFor="">Date</label>
					<input
						type="date"
						value={enteredDate}
						min="2022-01-01"
						step="2026-12-31"
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button
					type="button"
					onClick={props.stopEditingHandler}
				>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
