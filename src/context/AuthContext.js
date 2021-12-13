import React, { createContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth';
import { auth } from '../firebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  onAuthStateChanged(auth, (newUser) => {
    setCurrentUser(newUser);
  });

  const register = async (user) => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log(newUser);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (user) => {
    try {
      const newUser = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log(newUser);
      setCurrentUser(currentUser);
      console.log('user in state', currentUser);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const value = {
    login,
    currentUser,
    logout,
    register,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
