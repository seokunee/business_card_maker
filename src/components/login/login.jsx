import React from "react";
import styles from "./login.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

const Login = ({ authService, logout }) => {
  const onLogin = (event) => {
    authService.login(event.target.innerHTML);
  };
  return (
    <section className={styles.section}>
      <Header logout={logout} />
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
