import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = ({ cardsInfo }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.main__title}>Card Preview</h1>
      <ul className={styles.container}>
        {Object.keys(cardsInfo).map((key) => {
          return <Card key={key} card={cardsInfo[key]} />;
        })}
      </ul>
    </section>
  );
};

export default Preview;
