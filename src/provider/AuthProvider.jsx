import React, { createContext, useState } from "react";
import { auth } from "../Firebase/firebase.congig";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userInfo = {
    user,
    setUser,
    createUser,
    loading,
    setLoding,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
