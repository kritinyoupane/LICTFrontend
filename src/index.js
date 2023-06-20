import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import {AuthContextProvider} from "./context/AuthContext"
import TinyEditor from './Components/TinyEditor'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <App />
        {/* <TinyEditor /> */}
      </DarkModeContextProvider>
    </AuthContextProvider>
  // </React.StrictMode>
);
