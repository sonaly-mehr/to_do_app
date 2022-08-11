import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { db } from "../firebaseConfig";
import styles from "../styles/Home.module.css";

const todo = (props) => {
  const { id, title, details, timestamp } = props.todo;
  // const [taskFinished, setTaskFinished] = useState(false)

  const deleteTodo = (id, e) => {
    e.preventDefault();
    const docRef = doc(db, "todos", id);
    deleteDoc(docRef);
    alert("Task deleted successfully!");
  };
  return (
    <div className={styles.todoList}>
      <input type="checkbox" />
      <div style={{marginLeft: '12px'}}>
        <h4>{title}</h4>
        <p>{details}</p>
      </div>
      <AiOutlineDelete onClick={(e) => deleteTodo(id, e)} className={styles.deleteIcon}/>
    </div>
  );
};

export default todo;
