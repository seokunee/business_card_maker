import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ FileUploader, authService, userId, setUserId }) => {
  const [cardsInfo, setCardsInfo] = useState([
    {
      id: 1,
      name: "seokhun",
      company: "kakao",
      theme: "Dark",
      field: "front-engineer",
      email: "seokhun@gmail.com",
      message: "he is best of front engineer!",
      fileName: "seokhun",
      fileURL: "/images/default_logo.png",
    },
    {
      id: 2,
      name: "seokhun2",
      company: "kakao",
      theme: "Colorful",
      field: "front-engineer",
      email: "seokhun@gmail.com",
      message: "he is best of front engineer!",
      fileName: "seokhun",
      fileURL: "/images/default_logo.png",
    },
    {
      id: 3,
      name: "seokhun3",
      company: "kakao",
      theme: "Light",
      field: "front-engineer",
      email: "seokhun@gmail.com",
      message: "he is best of front engineer!",
      fileName: "seokhun",
      fileURL: "/images/default_logo.png",
    },
    {
      id: 4,
      name: "seokhun",
      company: "kakao",
      theme: "Dark",
      field: "front-engineer",
      email: "seokhun@gmail.com",
      message: "he is best of front engineer!",
      fileName: "seokhun",
      fileURL: "/images/default_logo.png",
    },
  ]);
  const history = useHistory();
  const logout = () => {
    authService.signOut();
  };

  useEffect(() => {
    authService.authState((user) => {
      if (!user) {
        history.push("/");
        setUserId(null);
      }
    });
  });

  const onAdd = (card) => {
    setCardsInfo([...cardsInfo, card]);
  };

  const onUpdate = (card, index) => {
    const copy = [...cardsInfo];
    copy[index] = card;
    setCardsInfo(copy);
  };

  const onDelete = (index) => {
    const copy = [...cardsInfo];
    copy.splice(index, 1);
    setCardsInfo(copy);
  };

  return (
    <div className={styles.container}>
      <Header userId={userId} logout={logout} />
      <section className={styles.maker}>
        <Editor
          cardsInfo={cardsInfo}
          FileUploader={FileUploader}
          onAdd={onAdd}
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
