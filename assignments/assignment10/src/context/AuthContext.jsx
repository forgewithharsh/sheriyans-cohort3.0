import { createContext, useState } from "react";

export const Auth = createContext();

export const ContextProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState();
  const [loggedInUser, setLoggedInUser] = useState();

  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
