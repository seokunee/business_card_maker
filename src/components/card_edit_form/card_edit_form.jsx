import React, { useRef } from "react";
import styles from "./card_edit_form.module.css";
import Button from "../delete/button";

const CardEditForm = ({ FileUploader, card, onUpdate, onDelete }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const fieldRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  // const [file, setFile] = useState({ fileName: "", fileURL: "" });

  const { id, name, company, field, theme, email, message, fileName, fileURL } =
    card;

  const onChange = (event) => {
    event.preventDefault();
    const copy = {
      ...card,
      name: nameRef.current.value,
      company: companyRef.current.value,
      theme: themeRef.current.value,
      field: fieldRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };
    onUpdate(copy, id);
  };

  const remove = (event) => {
    event.preventDefault();
    onDelete(id);
  };
  const setImageFile = (file) => {
    const copy = {
      ...card,
      fileName: file.original_filename,
      fileURL: file.url,
    };
    onUpdate(copy, id);
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        ref={nameRef}
        type="text"
        name={name}
        placeholder="name"
        onChange={onChange}
        value={name}
      />
      <input
        className={styles.input}
        ref={companyRef}
        type="text"
        placeholder="company"
        name={company}
        onChange={onChange}
        value={company}
      />
      <select
        ref={themeRef}
        className={styles.select}
        onChange={onChange}
        name={theme}
        value={theme}
      >
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
        onChange={onChange}
        value={field}
      />
      <input
        className={styles.input}
        ref={emailRef}
        type="text"
        placeholder="email"
        name={email}
        onChange={onChange}
        value={email}
      />
      <textarea
        className={styles.textarea}
        ref={messageRef}
        type="text"
        placeholder="message"
        name={message}
        onChange={onChange}
        value={message}
      />
      <div className={styles.image__input}>
        <FileUploader fileName={fileName} setImageFile={setImageFile} />
      </div>
      <Button name="Delete" onClick={remove} />
    </form>
  );
};
export default CardEditForm;
