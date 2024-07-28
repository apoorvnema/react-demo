import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            price: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        id="title"
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        value={enteredAmount}
                        id="amount"
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        value={enteredDate}
                        id="date"
                        min="2023-01-01"
                        max="2024-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button
                    type="button"
                    onClick={() => {
                        props.onCancel();
                    }}
                >
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;