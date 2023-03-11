import React from "react";
import { LinkItem } from "../LinkItem";
import styles from "./fifthSection.module.scss";

export const FifthSection = () => {
  const cardItem = ["<LINKEDIN/>", "<EMAIL/>", "<TELEGRAM/>", "<RESUME/>"];
  return (
    <div className={styles.wrapper}>
      {cardItem.map((item) => (
        <LinkItem title={item} />
      ))}
    </div>
  );
};
