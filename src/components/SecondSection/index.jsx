import React from "react";
import styles from "./secondSection.module.scss";

export const SecondSection = () => {
  return (
    <div className={styles.secondSection}>
      <div className={styles.introduce}>
        Hello, I’m Mikhail, Front-end Developer. At the moment, I’m looking for
        new projects or companies to work with
      </div>
      <div className={styles.working}>
        <div className={styles.title}>{"<Working with/>"}</div>
        <div className={styles.content}>
          React, JavaScript, TypeScript, Redux/Redux toolkit, HTML, CSS, SCSS,
          SASS, Module CSS, React Hooks, Formik with yup, React hook form,
          React-router-dom, Framer Motion, JSON server, Chrome devTools, REST
          API, AXIOS, GIT, Apollo, GraphQL, Mui, Ant Design, FireBase
        </div>
      </div>
    </div>
  );
};
