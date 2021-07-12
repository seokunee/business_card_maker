import React, { useEffect } from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router";

const Maker = ({ authService, userId, setUserId }) => {
  const history = useHistory();
  const logout = () => {
    authService.signOut();
  };

  useEffect(() => {
    authService.authState((user) => {
      if (!user) {
        history.push("/");
        setUserId(null);
      }
    });
  });
  return (
    <div className={styles.container}>
      <Header logout={logout} />
      <section className={styles.maker}></section>
      <Footer />
    </div>
  );
};

export default Maker;
