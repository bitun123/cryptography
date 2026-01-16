import React, { createContext, useEffect, useState } from "react";

export const authDataContext = createContext();
function AuthContext({ children }) {
  const [allUserData, setallUserData] = useState("");
 
  useEffect(() => {
    const saveUser = localStorage.getItem("users");
    if (saveUser) {
      setallUserData(JSON.parse(saveUser));
    }
  }, []);
  const Logout = () => {
    localStorage.removeItem("users");
    setallUserData("");
  };

  return (
    <authDataContext.Provider value={{ allUserData, setallUserData, Logout }}>
      {children}
    </authDataContext.Provider>
  );
}

export default AuthContext;
