import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length > 0) {
            props.onAddGoal(enteredValue);
        }
        else {
            setIsValid(false);
        }
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!isValid ? 'invalid' : 'valid'}`}>
                <label htmlFor="goalInput">Course Goal</label>
                <input id="goalInput" type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
