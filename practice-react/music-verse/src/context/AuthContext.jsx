import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null,
  );

  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
