import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TestComponents from "./TestComponents.jsx";
import { ContextProvider } from "./context/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <TestComponents />
  </ContextProvider>,
);
