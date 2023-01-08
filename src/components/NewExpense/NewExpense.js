import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const startEditing = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	const saveExpenseDataHandler = (enteredExpenseData) => {
		//this function is used to communicate with the parent comp. NewExpense
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString() //not perfect but gens a random id; could end up duplicating
		};
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button
					onClick={startEditing}
					type="button"
				>
					Add New Expense
				</button>
			)}
			{isEditing && (
				<ExpenseForm
					stopEditingHandler={stopEditingHandler}
					onSaveExpenseData={saveExpenseDataHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
