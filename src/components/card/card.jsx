import React, { memo } from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE_URL = "/images/default_logo.png";

const Card = memo(({ card }) => {
  const { name, company, field, theme, email, message, fileURL } = card;
  const url = fileURL || DEFAULT_IMAGE_URL;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <div className={styles.image_wrap}>
        <img className={styles.image} src={url} alt="profile_photo" />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.field}>{field}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
});

function getStyles(theme) {
  switch (theme) {
    case "Dark":
      return styles.dark;
    case "Light":
      return styles.light;
    case "Colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
