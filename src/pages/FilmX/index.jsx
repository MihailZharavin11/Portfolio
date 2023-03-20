import React from "react";
import { Button } from "../../components/button";
import styles from "./filmX.module.scss";
import { Link } from "react-router-dom";
import Arrow from "../../utils/images/arrow.svg";

export const FilmX = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.projectDescriptionInner}>
        <div className={styles.title}>
          <h1 className={styles.titleText}>FILM X</h1>
          <p className={styles.subTitle}>CASE STUDY | 2022</p>
        </div>
        <div className={styles.description}>
          <p className={styles.tools}>TOOLS: React | JS</p>
          <p className={styles.descriptionText}>
            On this site you can view movie selections (top movies, popular
            movies), find a movie by genre, find a movie by search. You can also
            register/authorize with Firebase Authentication. Each user can mark
            watched or liked movies, the data is stored in the Firebase Realtime
            DataBase.
          </p>
        </div>
        <div className={styles.links}>
          <Button title={`<GIT/>`} border={true} />
          <Button title={`<VISIT WEBSITE/>`} primary={true} />
        </div>
        <div className={styles.boxImage}>asd</div>
      </div>
      <div className={styles.nextProject}>
        <Link className={styles.nextProjectLink}>
          <span className={styles.linkTitle}>NEXT PROJECT</span>{" "}
          <img className={styles.linkImg} src={Arrow} alt="Arrow" />
        </Link>
        <div className={styles.nextProjectTitle}>RICK & MORTY</div>
      </div>
    </div>
  );
};
