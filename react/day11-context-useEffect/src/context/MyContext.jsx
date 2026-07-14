import { createContext, useState } from "react";

// Consumer
export const MyStore = createContext();

// Provider
export const ContextProvider = ({ children }) => {
  console.log("context rendeing...");

  const [count, setCount] = useState(0);

  return (
    <MyStore.Provider value={{ count, setCount }}>{children}</MyStore.Provider>
  );
};
