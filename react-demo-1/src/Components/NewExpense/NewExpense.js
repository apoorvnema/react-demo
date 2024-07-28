import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && (
                <button
                    type="button"
                    onClick={() => {
                        setIsEditing(true);
                    }}
                >
                    Add Expense
                </button>
            )}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={() => {
                        setIsEditing(false);
                    }}
                />
            )}
        </div>
    );
};

export default NewExpense;
