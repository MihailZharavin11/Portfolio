import styles from "./app.module.scss";
import { FifthSection } from "./components/FifthSection";
import { FirstSection } from "./components/FirstSection";
import { Footer } from "./components/Footer";
import { FourthSection } from "./components/FourthSection";
import { Header } from "./components/Header";
import { SecondSection } from "./components/SecondSection";
import { ThirdSection } from "./components/ThirdSection";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </div>
  );
}

export default App;
