import React from "react";
import styles from "../styles/Home.module.css";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { UserContext } from "../pages/_app";
import { useRouter } from "next/router";
import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../firebaseConfig";

const Login = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const [users, setUsers] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const signUpWithGoogle = () => {
    signInWithPopup(firebaseAuth, provider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signedInUser = {
          name: displayName,
          email: email,
          success: true,
        };
        setUsers(signedInUser);
        setLoggedInUser(signedInUser);
        console.log(signedInUser);
        router.push("/home");
        // const {displayName, photoURL, email} =res.user;
        // console.log(displayName, photoURL, email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button className={styles.loginBtn} onClick={signUpWithGoogle}>
        <FcGoogle className={styles.icon} />
        Sign in with google
      </button>
    </div>
  );
};

export default Login;
