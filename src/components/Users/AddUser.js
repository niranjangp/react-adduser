import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [showErrorModal, setShowErrorModal] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setShowErrorModal({
        title: "Invalid Input",
        msg: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setShowErrorModal({
        title: "Invalid Age",
        msg: "Please enter a valid age (age > 0).",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const handleUsrNmChng = (event) => {
    setEnteredUserName(event.target.value);
  };
  const handleAgeChng = (event) => {
    setEnteredAge(event.target.value);
  };

  const hideErrorModalFn = () => {
    setShowErrorModal(null);
  }

  return (
    <div>
      {showErrorModal && (
        <ErrorModal title={showErrorModal.title} msg={showErrorModal.msg} hideErrorModal={hideErrorModalFn}/>
      )}
      <Card className={styles.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={handleUsrNmChng}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="text"
            value={enteredAge}
            onChange={handleAgeChng}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
