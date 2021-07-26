import React, { useEffect } from "react";
import styles from "./login.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router-dom";

const Login = ({ authService, loginUser, setUserId, userId }) => {
  const history = useHistory();

  const goToMaker = (uId) => {
    history.push({
      pathname: "/maker",
      state: { id: uId },
    });
    setUserId(uId);
  };

  const onLogin = (event) => {
    authService //
      .login(event.target.innerHTML)
      .then((result) => goToMaker(result.user.uId));
  };

  useEffect(() => {
    authService.authState((user) => {
      user && goToMaker(user.id);
    });
  }, []);

  return (
    <section className={styles.section}>
      <Header loginUser={loginUser} />
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
