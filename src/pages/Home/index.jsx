import React, { useContext, useEffect } from "react";
import styles from "./home.module.scss";
import { FirstSection } from "../../components/FirstSection";
import { SecondSection } from "../../components/SecondSection";
import { ThirdSection } from "../../components/ThirdSection";
import { FourthSection } from "../../components/FourthSection";
import { FifthSection } from "../../components/FifthSection";
import { Footer } from "../../components/Footer";
import { useLocation } from "react-router-dom";
import { scrollToElement } from "../../utils/lib/scrollTo";
import { motion } from "framer-motion";
export const Home = ({ workRef, contactRef }) => {
  const { state } = useLocation();

  useEffect(() => {
    if (state === "work") {
      scrollToElement(workRef);
    }
    if (state === "contacts") {
      scrollToElement(contactRef);
    }
  });

  return (
    <div className={styles.wrapper}>
      <FirstSection />
      <SecondSection />
      <ThirdSection workRef={workRef} />
      <FourthSection />
      <FifthSection contactRef={contactRef} />
      <Footer />
    </div>
  );
};
