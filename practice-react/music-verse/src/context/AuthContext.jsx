import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  console.log(registeredUsers)

  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
