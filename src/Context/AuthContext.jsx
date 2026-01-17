import React, { createContext, useEffect, useState, useContext } from "react";

export const authDataContext = createContext();

function AuthContext({ children }) {
  const [allUserData, setallUserData] = useState(null);

  useEffect(() => {
    const saveUser = localStorage.getItem("users");
    if (saveUser) {
      setallUserData(JSON.parse(saveUser));
    }
  }, []);


  const Logout = () => {
    localStorage.removeItem("users");
    setallUserData(null);
  };

  const isAuthenticated = !!allUserData; // ✅ important

  return (
    <authDataContext.Provider
      value={{ allUserData, isAuthenticated, Logout ,setallUserData }}
    >
      {children}
    </authDataContext.Provider>
  );
}

export const useAuth = () => useContext(authDataContext);

export default AuthContext;
