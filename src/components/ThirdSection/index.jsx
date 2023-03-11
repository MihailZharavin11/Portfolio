import React from "react";
import { ProjectItem } from "../ProjectItem";
import styles from "./thirdSection.module.scss";

export const ThirdSection = () => {
  const projectItemTop = [
    {
      type: "<PET PROJECT/>",
      year: "2022",
      title: "FILM X",
      path: "https://film-x-mihailzharavin11.vercel.app/",
    },
    {
      type: "<PET PROJECT/>",
      year: "2022",
      title: "RICK & MORTY",
      path: "https://rick-morty-mihailzharavin11.vercel.app/",
    },
  ];

  const projectItemBottom = [
    {
      type: "<PET PROJECT/>",
      year: "2022",
      title: "NOTES",
      path: "https://github.com/MihailZharavin11/noteApp",
    },
    {
      type: "<PET PROJECT/>",
      year: "2022",
      title: "FAKE CHAT",
      path: "https://fakechat-mihailzharavin11.vercel.app/",
    },
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
              path={item.path}
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
              path={item.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
