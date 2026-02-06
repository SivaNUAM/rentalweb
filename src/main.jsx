import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartContextProvider } from "./context/CartContext";
import { AppContextProvider } from "./context/AppContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
<CartContextProvider>
  <AppContextProvider>
    <App />
  </AppContextProvider>
</CartContextProvider>
);
