import React from "react";
import { useState } from "react";
import styles from "./header.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToElement } from "../../utils/lib/scrollTo";
export const Header = ({ workRef, contactRef }) => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClickListItem = (stateValue, ref) => {
    if (pathname !== "/") {
      navigate("/", { state: stateValue });
    }
    scrollToElement(ref);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link className={styles.logoLink} to={"/"}>
            {"<MZH/>"}
          </Link>
        </div>
        <ul className={styles.navigation}>
          <li
            onClick={() => {
              handleClickListItem("work", workRef);
            }}
            className={styles.navigationItem}
          >
            WORK
          </li>
          <li
            onClick={() => {
              handleClickListItem("contacts", contactRef);
            }}
            className={styles.navigationItem}
          >
            CONTACT
          </li>
        </ul>
        <div
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          className={`${styles.burger} ${isOpen ? styles.active : ""}`}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
