import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.msg}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.hideErrorModal}>OK</Button>
        </footer>
      </Card>
      <div className={styles.backdrop} onClick={props.hideErrorModal}/>
    </div>
  );
};

export default ErrorModal;
