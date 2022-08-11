import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {collection, orderBy, onSnapshot, query, serverTimestamp, addDoc, where} from "@firebase/firestore"
import {db} from "../firebaseConfig"
import ToDo from './ToDo'
import { AiOutlineMenu } from 'react-icons/ai';
import { HiPlusSm } from 'react-icons/hi';
import todo from './ToDo';
import { useContext } from 'react';
import { UserContext } from '../pages/_app';
import styles from '../styles/Home.module.css'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [title, setTitle]= useState("");
    const [details, setDetails]= useState("")
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

const handleSubmit=(e)=> {
    e.preventDefault();
    const collectionRef = collection(db, "todos")
    const docRef = addDoc(collectionRef, {title, details, email:loggedInUser.email, timestamp:
    serverTimestamp() })
    setTitle()
    setDetails()
    alert(`New task is added successfully!`)
    setTitle("")
    setDetails("")
}
    useEffect(()=> {
        const collectionRef = collection(db, "todos")
        const q = query(collectionRef, where("email", "==", loggedInUser.email), orderBy("timestamp", "desc"));

        const unsubscribe = onSnapshot(q, (querySnapshot)=> {
            setTodos(querySnapshot.docs.map(doc=> ({...doc.data(), id: doc.id, timestamp: doc.data().
            timestamp?.toDate().getTime() })))
        });
        return unsubscribe;
    },[])
    return (
        <div className={styles.todoContainer}>
            <h6><AiOutlineMenu className={styles.todoIcon}/> Make To Do Lists</h6>
            <form className="todo-input" onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder='@Make breakfast' value={title} onChange={(e)=>setTitle(e.target.value)} />
                <input type="text" name='details' placeholder='Note' value={details} onChange={(e)=>setDetails(e.target.value)} /> <br />
                <button type='submit'> <HiPlusSm style={{fontSize:'20px'}}/> Add New Task</button>
            </form>
            <div className={styles.todoListContainer}>
            {
                todos.map((todo)=> <ToDo key={todo.id} todo={todo}/>)
            }
            </div>
        </div>
    );
};

export default TodoList;