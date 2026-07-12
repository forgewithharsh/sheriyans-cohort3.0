import { createContext } from "react";

// setup out blank store
const MyStore = createContext();

// make a provider of our store who handle data
// and serves to the customers

export const ContextProvider = ({ children }) => {
  return <MyStore.Provider>{children}</MyStore.Provider>;
};
