import "../styles/globals.css";
import { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [loggedInUser, setLoggedInUser]= useState(false);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
