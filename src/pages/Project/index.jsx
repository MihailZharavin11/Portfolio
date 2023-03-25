import React, { useEffect } from "react";
import { Button } from "../../components/button";
import styles from "./project.module.scss";
import { Link, useLocation } from "react-router-dom";
import Arrow from "../../utils/images/arrow.svg";
import logoPRJ from "../../utils/images/logoProject.jpg";

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
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.wrapper}>
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
                return <>{tool}</>;
              }
              return <>{tool} | </>;
            })}
          </p>
          <p className={styles.descriptionText}>{description}</p>
        </div>
        <div className={styles.links}>
          <Button title={`<GIT/>`} border={true} path={gitLink} />
          <Button title={`<VISIT WEBSITE/>`} primary={true} path={webSite} />
        </div>
        <div className={styles.boxImage}>
          <img className={styles.image} src={logoPRJ} alt="Dragon" />
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
