import React from 'react';
import { useContext } from "react";
import TodoList from '../Components/TodoList';
import { UserContext } from "../pages/_app";
import styles from '../styles/Home.module.css'

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className={styles.homeSection}>
            <h2>Welcome Back {loggedInUser && loggedInUser.name}!</h2>
            <TodoList/>
        </div>
    );
};

export default Home;