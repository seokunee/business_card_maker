import React, { useState } from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Maker from "./components/maker/maker";

const App = ({ authService }) => {
  const [userId, setUserId] = useState(null);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <div className={styles.container}>
            <Login
              authService={authService}
              setUserId={setUserId}
              userId={userId}
            />
          </div>
        </Route>
        <Route exact path="/maker">
          <div className={styles.container}>
            <Maker
              authService={authService}
              userId={userId}
              setUserId={setUserId}
            />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
