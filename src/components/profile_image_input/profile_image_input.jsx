import React, { memo, useRef, useState } from "react";
import styles from "./profile_image_input.module.css";
const ProfileImageInput = memo(({ fileName, imageUploader, setImageFile }) => {
  const inputRef = useRef();
  const [spinner, setSpinner] = useState(false);

  const onChange = (event) => {
    setSpinner(true);
    imageUploader
      .upload(event.target.files[0])
      .then((response) => setImageFile(response))
      .then(() => setSpinner(false));
  };
  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  return (
    <div className={styles.container}>
      {spinner ? (
        <div className={styles.loader}></div>
      ) : (
        <>
          <input
            ref={inputRef}
            className={styles.input}
            type="file"
            name="file"
            accept="image/*"
            onChange={onChange}
          />
          <button
            className={`${styles.button} ${
              fileName ? styles.pink : styles.grey
            }`}
            onClick={onClick}
          >
            {fileName || "No file"}
          </button>
        </>
      )}
    </div>
  );
});

export default ProfileImageInput;
