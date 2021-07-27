import React, { useCallback, useEffect } from "react";
import styles from "./login.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router-dom";

const Login = ({ authService, setUserId }) => {
  const history = useHistory();

  const goToMaker = useCallback(
    (uId) => {
      history.push({
        pathname: "/maker",
        state: { id: uId },
      });
      setUserId(uId);
    },
    [history, setUserId]
  );

  const onLogin = (event) => {
    authService //
      .login(event.target.innerHTML)
      .then((result) => goToMaker(result.user.uId));
  };

  useEffect(() => {
    authService.authState((user) => {
      user && goToMaker(user.id);
    });
  }, [authService, goToMaker]);

  return (
    <section className={styles.section}>
      <Header />
      <main className={styles.login}>
        <span className={styles.login__title}>Login</span>
        <ul className={styles.login__list}>
          <li className={styles.login__item}>
            <button className={styles.login__type} onClick={onLogin}>
              Google
            </button>
          </li>
          <li className={styles.login__item}>
            <button className={styles.login__type} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </main>
      <Footer />
    </section>
  );
};

export default Login;
