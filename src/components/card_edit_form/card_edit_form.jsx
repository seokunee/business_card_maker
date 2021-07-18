import React, { useEffect, useRef } from "react";
import styles from "./card_edit_form.module.css";
import ProfileImageInput from "../profile_image_input/profile_image_input";
import Button from "../delete/button";

const CardEditForm = ({ card }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const fieldRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { name, company, field, theme, email, message, fileName, fileURL } =
    card;

  const print = (event) => {
    console.log(event.target.value);
  };
  const onSubmit = (event) => {
    console.log(event.options);
  };

  useEffect(() => {
    nameRef.current.value = name;
    companyRef.current.value = company;
    fieldRef.current.value = field;
    emailRef.current.value = email;
    messageRef.current.value = message;
  }, []);

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        ref={nameRef}
        type="text"
        name={name}
        placeholder="name"
        onChange={print}
      />
      <input
        className={styles.input}
        ref={companyRef}
        type="text"
        placeholder="company"
        name={company}
      />
      <select className={styles.select} onChange={onSubmit} name={theme}>
        <option>Light</option>
        <option>Dark</option>
        <option>Colorful</option>
      </select>
      <input
        className={styles.input}
        ref={fieldRef}
        type="text"
        placeholder="field"
        name={field}
      />
      <input
        className={styles.input}
        ref={emailRef}
        type="text"
        placeholder="email"
        name={email}
      />
      <textarea
        className={styles.textarea}
        ref={messageRef}
        type="text"
        placeholder="message"
        name={message}
      />
      <div className={styles.image__input}>
        <ProfileImageInput name={name} onClick={onSubmit} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
