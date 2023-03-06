import React from "react";
import styles from "./header.module.scss";
export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>{"<MZH/>"}</div>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>WORK</li>
        <li className={styles.navigationItem}>CONTACT</li>
      </ul>
    </div>
  );
};
