import React, { useContext, createContext, useState, useEffect } from "react";

// Create context for authentication data
export const AuthContext = createContext();

// Define a function  to get data from Auth context
export function useAuth() {
  return useContext(AuthContext);
}

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //     setLoading(false);
  //   });

  //   return unsubscribe;
  // }, []);

  // function signup(email, password) {
  //   return auth.createUserWithEmailAndPassword(auth, email, password);
  // }

  // function login(email, password) {
  //   return auth.signInWithEmailAndPassword(email, password);
  // }

  // function logout(email, password) {
  //   return auth.signOut();
  // }

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
