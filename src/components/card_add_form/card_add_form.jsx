import React, { useRef, useState } from "react";
import Button from "../delete/button";
import ProfileImageInput from "../profile_image_input/profile_image_input";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ cardsInfo, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const fieldRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

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
      fileName: "",
      fileURL: "",
    };
    onAdd(card);
    formRef.current.reset();
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
        <ProfileImageInput name="No file" />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
