import React from "react";
import styles from "../FourthSection/fourthSection.module.scss";

export const FourthSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.titleTop}>LET'S WORK</div>
        <div className={styles.titleBottom}>
          <span className={styles.text}>TOGETHER</span>
        </div>
      </div>
      <div className={styles.gifWrapper}>
        <div className={styles.gif}></div>
      </div>
    </div>
  );
};
