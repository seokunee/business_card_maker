import React, { useEffect, useState } from "react";
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
  const logout = () => {
    authService.signOut();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.readUserData(userId, setCardsInfo);
    return () => stopSync();
  }, [userId]);

  useEffect(() => {
    authService.authState((user) => {
      if (!user) {
        history.push("/");
        setUserId(null);
      } else {
        setUserId(user.uid);
      }
    });
  }, []);

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
      <Header userId={userId} logout={logout} />
      <section className={styles.maker}>
        <Editor
          cardsInfo={cardsInfo}
          FileUploader={FileUploader}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
        <Preview cardsInfo={cardsInfo} />
      </section>
      <Footer userId={userId} />
    </div>
  );
};

export default Maker;

// {
//   id: 1,
//   name: "seokhun",
//   company: "kakao",
//   theme: "Dark",
//   field: "front-engineer",
//   email: "seokhun@gmail.com",
//   message: "he is best of front engineer!",
//   fileName: "seokhun",
//   fileURL: "/images/default_logo.png",
// },
// {
//   id: 2,
//   name: "seokhun2",
//   company: "kakao",
//   theme: "Colorful",
//   field: "front-engineer",
//   email: "seokhun@gmail.com",
//   message: "he is best of front engineer!",
//   fileName: "seokhun",
//   fileURL: "/images/default_logo.png",
// },
// {
//   id: 3,
//   name: "seokhun3",
//   company: "kakao",
//   theme: "Light",
//   field: "front-engineer",
//   email: "seokhun@gmail.com",
//   message: "he is best of front engineer!",
//   fileName: "seokhun",
//   fileURL: "/images/default_logo.png",
// },
// {
//   id: 4,
//   name: "seokhun",
//   company: "kakao",
//   theme: "Dark",
//   field: "front-engineer",
//   email: "seokhun@gmail.com",
//   message: "he is best of front engineer!",
//   fileName: "seokhun",
//   fileURL: "/images/default_logo.png",
// },
