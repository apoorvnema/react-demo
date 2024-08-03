import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = () => {
    const [input, setInput] = useState({
        username: "",
        age: "",
    });

    const handleInput = (event) => {
        setInput((prev) => ({
            ...prev,
            [event.target.id]: event.target.value,
        }));
    };

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(input.username, input.age);
        setInput({ username: "", age: "" });
    };

    return (
        <Card className="input">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={(event) => handleInput(event)} value={input.username} />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" onChange={(event) => handleInput(event)} value={input.age} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
