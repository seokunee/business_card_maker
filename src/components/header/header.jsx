import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ logout }) => {
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
});

export default Header;
