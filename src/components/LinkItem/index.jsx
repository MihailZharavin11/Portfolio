import React from "react";
import styles from "./linkItem.module.scss";

export const LinkItem = ({ title, path }) => {
  return (
    <div
      onClick={() => {
        window.open(path);
      }}
      className={styles.card}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardInnerAnimation}>
          <span className={styles.cardText}>{title}</span>
          <span className={styles.cardTextInvisible}>{title}</span>
          <span className={styles.cardTextInvisible}>{title}</span>
          <span className={styles.cardTextInvisible}>{title}</span>
        </div>
      </div>
    </div>
  );
};
