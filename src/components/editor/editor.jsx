import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ FileUploader, cardsInfo, onAdd, onUpdate, onDelete }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <div className={styles.cards}>
        {cardsInfo.map((card, index) => {
          return (
            <CardEditForm
              key={card.id}
              FileUploader={FileUploader}
              card={card}
              onUpdate={onUpdate}
              index={index}
              onDelete={onDelete}
            />
          );
        })}
        <CardAddForm
          cardsInfo={cardsInfo}
          onAdd={onAdd}
          FileUploader={FileUploader}
        />
      </div>
    </section>
  );
};

export default Editor;
