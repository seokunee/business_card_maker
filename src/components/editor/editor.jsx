import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import CardEditForm from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cardsInfo, onAdd }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <div className={styles.cards}>
        {cardsInfo.map((card) => {
          return <CardEditForm key={card.id} card={card} />;
        })}
        <CardAddForm cardsInfo={cardsInfo} onAdd={onAdd} />
      </div>
    </section>
  );
};

export default Editor;
