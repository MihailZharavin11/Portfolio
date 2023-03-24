import React from "react";
import { LinkItem } from "../LinkItem";
import styles from "./fifthSection.module.scss";

export const FifthSection = ({ contactRef }) => {
  const cardItem = [
    {
      title: "<LINKEDIN/>",
      path: "https://www.linkedin.com/in/mikhailzharavin/",
    },
    {
      title: "<EMAIL/>",
      path: "mailto:mihail.zharavin65@gmail.com",
    },
    {
      title: "<TELEGRAM/>",
      path: "https://t.me/MZharavin",
    },
    {
      title: "<RESUME/>",
      path: "https://drive.google.com/file/d/1id-oRlr6w_VO8jUWEDbdXcb52KjAhxEm/view?usp=share_link",
    },
  ];

  return (
    <div ref={contactRef} className={styles.wrapper}>
      {cardItem.map((item, index) => (
        <LinkItem key={item + index} title={item.title} path={item.path} />
      ))}
    </div>
  );
};
