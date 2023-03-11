import React from "react";
import { ProjectItem } from "../ProjectItem";
import styles from "./thirdSection.module.scss";

export const ThirdSection = () => {
  const projectItemTop = [
    { type: "<PET PROJECT/>", year: "2022", title: "FILM X" },
    { type: "<PET PROJECT/>", year: "2022", title: "RICK & MORTY" },
  ];

  const projectItemBottom = [
    { type: "<PET PROJECT/>", year: "2022", title: "NOTES" },
    { type: "<PET PROJECT/>", year: "2022", title: "FAKE CHAT" },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>PROJECT</div>
      <div className={styles.cardWrapper}>
        <div className={styles.cardsTop}>
          {projectItemTop.map((item, index) => (
            <ProjectItem
              key={item.title}
              title={item.title}
              year={item.year}
              type={item.type}
              index={index + 1}
            />
          ))}
        </div>
        <div className={styles.cardsBottom}>
          {projectItemBottom.map((item, index) => (
            <ProjectItem
              key={item.title}
              title={item.title}
              year={item.year}
              type={item.type}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
