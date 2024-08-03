import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid username and age",
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid age",
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const handleErrorForm = () => {
        setError(null);
    }

    return (
        <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={handleErrorForm}/>}
        <Card className="input">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={enteredUsername}
                    onChange={usernameChangeHandler}
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    value={enteredAge}
                    onChange={ageChangeHandler}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </>
    );
};

export default AddUser;
