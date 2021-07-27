import React from "react";
import styles from "./header.module.css";

const Header = ({ logout }) => {
  return (
    <header className={styles.header}>
      {logout && (
        <div className={styles.logout} onClick={logout}>
          Logout
        </div>
      )}
      <img src="/images/logo.png" alt="logo" />
      <span className={styles.title}>Business Card Maker</span>
    </header>
  );
};

export default Header;
