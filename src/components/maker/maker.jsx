import React, { useEffect, useState } from "react";
import styles from "./maker.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService, userId, setUserId }) => {
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
  return (
    <div className={styles.container}>
      <Header userId={userId} logout={logout} />
      <section className={styles.maker}>
        <Editor cardsInfo={cardsInfo} onAdd={onAdd} />
        <Preview cardsInfo={cardsInfo} />
      </section>
      <Footer userId={userId} />
    </div>
  );
};

export default Maker;
