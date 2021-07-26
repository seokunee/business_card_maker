import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ FileUploader, cardsInfo, onUpdate, onDelete }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <div className={styles.cards}>
        {Object.keys(cardsInfo).map((key) => {
          return (
            <CardEditForm
              key={key}
              FileUploader={FileUploader}
              card={cardsInfo[key]}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
        <CardAddForm
          cardsInfo={cardsInfo}
          onUpdate={onUpdate}
          FileUploader={FileUploader}
        />
      </div>
    </section>
  );
};

export default Editor;
