import React from "react";
import styles from "./profile_image_input.module.css";
const ProfileImageInput = ({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

export default ProfileImageInput;
