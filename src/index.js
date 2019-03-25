import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { NotesContextProvider } from "./contexts/NotesContext";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <NotesContextProvider>
      <App />
    </NotesContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
