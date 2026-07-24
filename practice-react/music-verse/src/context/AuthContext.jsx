import { createContext } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  return <Auth.Provider>{children}</Auth.Provider>;
};
