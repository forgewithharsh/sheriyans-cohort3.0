import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { ContextProvider } from "./context/AuthContext.jsx";
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById("root")).render(
  <ContextProvider>
     <CartProvider>
    <AppRoutes />
  </CartProvider>
  </ContextProvider>,
);
