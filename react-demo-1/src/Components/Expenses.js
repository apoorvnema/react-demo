import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React from 'react'

const Expenses = () => {
    const expenses = [
        { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
        { id: 2, title: "Book", date: new Date(2023, 8, 25), price: 10 },
        { id: 3, title: "Pen", date: new Date(2023, 2, 10), price: 1 },
        { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
    ];

    return (
        <div className="expenses">
            {expenses.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        price={expense.price}
                    />
                );
            })}
        </div>
    )
}

export default Expenses