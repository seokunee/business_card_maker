import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = ({ cardsInfo }) => {
  console.log(cardsInfo[0].file);
  return (
    <section className={styles.preview}>
      <h1 className={styles.main__title}>Card Preview</h1>
      <ul className={styles.container}>
        {cardsInfo.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </ul>
    </section>
  );
};

export default Preview;
