import React from "react";
import { Link } from "react-router-dom";
import styles from "./projectItem.module.scss";

export const ProjectItem = ({ title, year, type, index, path }) => {
  return (
    <Link
      preventScrollReset={false}
      to={path}
      className={`${styles.card} ${styles["card" + index]}`}
    >
      <div className={styles.cardHeader}>
        <div className={styles.cardType}>{type}</div>
        <div className={styles.year}>{year}</div>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.number}>0{index}/</span>
        {title}
      </div>
    </Link>
  );
};
