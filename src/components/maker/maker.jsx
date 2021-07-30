import React, { useCallback, useEffect, useState } from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({
  FileUploader,
  authService,
  userId,
  setUserId,
  cardRepository,
}) => {
  const [cardsInfo, setCardsInfo] = useState({});
  const history = useHistory();
  const logout = useCallback(() => {
    authService.signOut();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.readUserData(userId, setCardsInfo);
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.authState((user) => {
      if (!user) {
        history.push("/");
        setUserId(null);
      } else {
        setUserId(user.uid);
      }
    });
  }, [authService, setUserId, history]);

  const onUpdate = (card, id) => {
    setCardsInfo({ ...cardsInfo, [id]: card });
    cardRepository.writeUserData(card, userId);
  };

  const onDelete = (id) => {
    const copy = { ...cardsInfo };
    delete copy[id];
    setCardsInfo(copy);
    cardRepository.removeUserData(id, userId);
  };

  return (
    <div className={styles.container}>
      <Header logout={logout} />
      <section className={styles.maker}>
        <Editor
          cardsInfo={cardsInfo}
          FileUploader={FileUploader}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
        <Preview cardsInfo={cardsInfo} />
      </section>
      <Footer />
    </div>
  );
};

export default Maker;
