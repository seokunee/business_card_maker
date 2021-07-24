import React, { useRef } from "react";
import styles from "./profile_image_input.module.css";
const ProfileImageInput = ({ fileName, imageUploader, setImageFile }) => {
  const inputRef = useRef();

  const onChange = (event) => {
    imageUploader
      .upload(event.target.files[0])
      .then((response) => setImageFile(response));
  };
  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        name="file"
        accept="image/*"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onClick}>
        {fileName || "No file"}
      </button>
    </div>
  );
};

export default ProfileImageInput;
