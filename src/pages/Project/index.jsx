import React, { useEffect } from "react";
import { Button } from "../../components/button";
import styles from "./project.module.scss";
import { Link, useLocation } from "react-router-dom";
import Arrow from "../../utils/images/arrow.svg";
import { motion } from "framer-motion";

export const Project = ({
  title,
  type,
  year,
  tools,
  description,
  nextProject,
  nextProjectLink,
  webSite,
  gitLink,
  backgroundColor,
  image,
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.backColor}
        data-bcg={title}
        style={{
          background: backgroundColor,
        }}
        transition={{
          delay: "0.7",
          duration: "0.7",
        }}
        initial={{
          height: "100%",
        }}
        animate={{
          height: "0%",
        }}
      >
        <h1 className={styles.backTitle}>{title}</h1>
      </motion.div>
      <motion.div
        data-bcg={title}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "black",
          zIndex: "20",
          overflow: "hidden",
        }}
        transition={{
          duration: "0.7",
        }}
        initial={{
          height: "100%",
        }}
        animate={{
          height: "0%",
        }}
      ></motion.div>
      <div className={styles.projectDescriptionInner}>
        <div className={styles.title}>
          <h1 className={styles.titleText}>{title}</h1>
          <p className={styles.subTitle}>
            {type} | {year}
          </p>
        </div>
        <div className={styles.description}>
          <p className={styles.tools}>
            TOOLS:{" "}
            {tools.map((tool, index, arr) => {
              if (index + 1 === arr.length) {
                return <React.Fragment key={index}>{tool}</React.Fragment>;
              }
              return <React.Fragment key={index}>{tool} | </React.Fragment>;
            })}
          </p>
          <p className={styles.descriptionText}>{description}</p>
        </div>
        <div className={styles.links}>
          <Button title={`<GIT/>`} border={true} path={gitLink} />
          <Button title={`<VISIT WEBSITE/>`} primary={true} path={webSite} />
        </div>
        <div className={styles.boxImage}>
          <img className={styles.image} src={image} alt="ScreenProject" />
        </div>
      </div>
      {nextProject && (
        <div className={styles.nextProject}>
          <Link to={nextProjectLink} className={styles.nextProjectLink}>
            <span className={styles.linkTitle}>NEXT PROJECT</span>{" "}
            <img className={styles.linkImg} src={Arrow} alt="Arrow" />
          </Link>
          <div className={styles.nextProjectTitle}>{nextProject}</div>
        </div>
      )}
    </div>
  );
};
