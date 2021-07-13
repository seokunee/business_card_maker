import React, { useEffect } from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

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
      <Header userId={userId} logout={logout} />
      <section className={styles.maker}>
        <Editor />
        <Preview />
      </section>
      <Footer userId={userId} />
    </div>
  );
};

export default Maker;
