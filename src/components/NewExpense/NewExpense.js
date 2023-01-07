import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
	const [onLoad, setOnLoad] = useState(true);

	const displayForm = () => {
		setOnLoad((prev) => !onLoad);
	};
	const firstDisplay = (
		<button
			type="button"
			onClick={displayForm}
		>
			Add New Expense
		</button>
	);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		//this function is used to communicate with the parent comp. NewExpense
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString() //not perfect but gens a random id; could end up duplicating
		};
		console.log(expenseData);
		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			{onLoad ? (
				firstDisplay
			) : (
				<ExpenseForm
					displayForm={displayForm}
					onSaveExpenseData={saveExpenseDataHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
