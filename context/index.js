import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [secret, setSecret] = useState("");
  const [user, setUser] = useState(null);
  const [base, setBase] = useState({});

  const value = {
    secret,
    setSecret,
    user,
    setUser,
    base,
    setBase,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
