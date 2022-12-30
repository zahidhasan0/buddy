import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthProvider = createContext();

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authinfo = {
    signUp,
    user,
    signIn,
    logout,
    loading,
    googleSignIn,
    updateUser,
    isDark,
    setIsDark,
  };
  return (
    <div>
      <AuthProvider.Provider value={authinfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
