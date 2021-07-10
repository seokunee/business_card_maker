import React, { useState } from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App({ authService }) {
  const [logout, setLogout] = useState(false);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <div className={styles.container}>
            <Login logout={logout} authService={authService} />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
