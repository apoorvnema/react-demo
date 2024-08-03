import React, { useState } from "react";

function AddUser(){
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
    };

    const addUserHandler = (event) => {
        event.preventDefault();
    };
  return <form onSubmit={addUserHandler}>
  <div className={`form-control ${!isValid ? 'invalid' : 'valid'}`}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" onChange={inputChangeHandler} />
      <label htmlFor="age">Age</label>
      <input id="age" type="text" onChange={inputChangeHandler} />
  </div>
  <button type="submit">Add User</button>
</form>
}

export default AddUser;