import React from "react";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";

export const Button = ({ primary = false, border = false, title, path }) => {
  return (
    <Link
      to={path}
      className={`${styles.button} ${primary ? styles.color : ""} ${
        border ? styles.border : ""
      }`}
    >
      {title}
    </Link>
  );
};
