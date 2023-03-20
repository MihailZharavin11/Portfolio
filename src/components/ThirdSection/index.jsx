import React from "react";
import { ProjectItem } from "../ProjectItem";
import styles from "./thirdSection.module.scss";
import { projectItemBottom } from "../../data.js";
import { projectItemTop } from "../../data.js";

export const ThirdSection = () => {
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
