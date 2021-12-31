import { React, useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

import classes from "./AddUsers.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setError({
    //     title: "Invalid input!",
    //     message: "Please enter a valid name and age.",
    //   });

    //   return;
    // }

    // if (enteredAge < 1) {
    //   setError({
    //     title: "Invalid age!",
    //     message: "Please enter a valid age (> 0).",
    //   });

    //   return;
    // }

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age.",
      });

      return;
    }

    if (enteredUserAge < 1) {
      setError({
        title: "Invalid age!",
        message: "Please enter a valid age (> 0).",
      });

      return;
    }

    // console.log(enteredUsername, enteredAge);

    props.onAddUser(enteredName, enteredUserAge);

    // setEnteredAge("");
    // setEnteredUserName("");

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
            placeholder="username"
            ref={nameInputRef}
          ></input>

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            // onChange={ageChangeHandler}
            // value={enteredAge}
            placeholder="age"
            ref={ageInputRef}
          ></input>

          <Button type="submit">Add</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
