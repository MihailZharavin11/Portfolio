import React from "react";
import { useState } from "react";
import styles from "./header.module.scss";
export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.logo}>{"<MZH/>"}</div>
      {/* <ul className={styles.navigation}>
        <li className={styles.navigationItem}>WORK</li>
        <li className={styles.navigationItem}>CONTACT</li>
      </ul> */}
      <div
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className={`${styles.burger} ${isOpen ? styles.active : ""}`}
      >
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
