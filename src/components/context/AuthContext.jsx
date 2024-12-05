import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const initialState = {
  user: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state,"satet");
  const Googleprovider= new GoogleAuthProvider()
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function getUser() {
    return onAuthStateChanged(auth, (user) => {
      dispatch({ type: "GET_USER", payload: user });
    });
  }
  async function SignInGoogle(){
    try {
      
      return await signInWithPopup(auth,Googleprovider)
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    getUser();
    SignInGoogle()
  }, []);
  const value = {
    register,
    user:state.user,
    signIn,
    SignInGoogle
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
