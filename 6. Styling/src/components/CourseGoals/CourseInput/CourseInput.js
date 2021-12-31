import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

const CourseInput = (props) => {
  // Entered goal
  const [enteredValue, setEnteredValue] = useState("");
  // Is input valid?
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    // Warning invalid input
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

    // Take input
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    // Prevent default submit
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    // Generate new goal and add it to current array
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={!isValid ? "invalid" : ""}> */}
      {/* <FormControl invalid={!isValid}> */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label style={{ color: !isValid ? "red " : "black" }}>
          Course Goal
        </label>

        {/* Take input  */}
        <input
          style={{
            borderColor: !isValid ? "red " : "black",
            background: !isValid ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      {/* </FormControl> */}

      {/* Add goal button  */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
