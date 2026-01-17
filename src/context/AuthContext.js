"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "@/lib/firebase";

const AuthContext = createContext();
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // REGISTER
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  LOGIN
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  GOOGLE LOGIN
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //  LOGOUT
  const logout = async () => {
    await signOut(auth);
  };

 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    register,
    login,
    googleLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
