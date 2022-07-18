import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleAuth, facebookAuth, popup } from "../utils/firebase";

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`must be used withing the CountProvider`);
  }
  return context;
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function googleSignIn() {
    return popup(auth, googleAuth);
  }

  function facebookSignIn() {
    return popup(auth, facebookAuth);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    googleSignIn,
    facebookSignIn,
    logout,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
