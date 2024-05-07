import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StoreContexts from "./Context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreContexts>
      <App />
    </StoreContexts>
  </React.StrictMode>
);
