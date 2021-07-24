import React, { useRef, useState } from "react";
import Button from "../delete/button";
import ProfileImageInput from "../profile_image_input/profile_image_input";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ FileUploader, cardsInfo, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const fieldRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: "", fileURL: "" });

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      field: fieldRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    onAdd(card);
    formRef.current.reset();
    setFile({ fileName: "", fileURL: "" });
  };

  const setImageFile = (file) => {
    setFile({
      fileName: file.original_filename,
      fileURL: file.url,
    });
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        className={styles.input}
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className={styles.input}
        ref={companyRef}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select ref={themeRef} className={styles.select} name="theme">
        <option>Light</option>
        <option>Dark</option>
        <option>Colorful</option>
      </select>
      <input
        className={styles.input}
        ref={fieldRef}
        type="text"
        name="field"
        placeholder="Field"
      />
      <input
        className={styles.input}
        ref={emailRef}
        type="text"
        name="email"
        placeholder="Email"
      />
      <textarea
        className={styles.textarea}
        ref={messageRef}
        type="text"
        name="message"
        placeholder="Message"
      />
      <div className={styles.image__input}>
        <FileUploader fileName={file.fileName} setImageFile={setImageFile} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
