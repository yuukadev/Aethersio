import React, { useState, createContext } from "react";
import { signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { auth } from "../auth/firebase";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [anotherUser, setAnotherUser] = useState({});
  const [base, setBase] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const value = {
    base,
    setBase,
    loggedIn,
    setUser,
    user,
    anotherUser,
    setAnotherUser,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
