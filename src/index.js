import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app.jsx";
import AuthService from "./sevice/auth_service";

const authService = new AuthService();
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
