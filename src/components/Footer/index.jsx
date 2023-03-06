import React from "react";
import styles from "./footer.module.scss";
export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.footerText}>DESIGN ANASTASIA LAVRENTIY</span>
      <span className={styles.footerText}>2023</span>
    </div>
  );
};
