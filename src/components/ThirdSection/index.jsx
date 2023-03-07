import React from "react";
import styles from "./thirdSection.module.scss";

export const ThirdSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>PROJECT</div>
      <div className={styles.cardWrapper}>
        <div className={styles.cardsTop}>
          <div className={`${styles.card} ${styles.card1}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardType}>{`<PET PROJECT/>`}</div>
              <div className={styles.year}>2022</div>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.number}>01/</span>
              FILM X
            </div>
          </div>
          <div className={`${styles.card} ${styles.card2}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardType}>{`<PET PROJECT/>`}</div>
              <div className={styles.year}>2022</div>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.number}>02/</span>
              RICK & MORTY
            </div>
          </div>
        </div>
        <div className={styles.cardsBottom}>
          <div className={`${styles.card} ${styles.card3}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardType}>{`<PET PROJECT/>`}</div>
              <div className={styles.year}>2022</div>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.number}>03/</span>
              NOTES
            </div>
          </div>
          <div className={`${styles.card} ${styles.card4}`}>
            <div className={styles.cardHeader}>
              <div className={styles.cardType}>{`<PET PROJECT/>`}</div>
              <div className={styles.year}>2022</div>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.number}>04/</span>
              FAKE CHAT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
