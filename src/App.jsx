import { Routes, Route, useLocation } from "react-router-dom";
import { Project } from "./pages/Project";
import { Layout } from "./layout";
import { filmX, rickAndMorty, notes, fakeChat } from "./data";
import { Home } from "./pages/Home";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Layout workRef={workRef} contactRef={contactRef} />}
        >
          <Route
            path="/"
            element={<Home workRef={workRef} contactRef={contactRef} />}
          />
          <Route
            path="filmx"
            element={
              <Project
                backgroundColor={filmX.backgroundColor}
                description={filmX.description}
                gitLink={filmX.gitLink}
                nextProject={filmX.nextProjectTitle}
                nextProjectLink={filmX.nextProjectLink}
                title={filmX.title}
                tools={filmX.tools}
                type={filmX.type}
                year={filmX.year}
                webSite={filmX.webSite}
                image={filmX.image}
              />
            }
          />
          <Route
            path="rick-morty"
            element={
              <Project
                backgroundColor={rickAndMorty.backgroundColor}
                description={rickAndMorty.description}
                gitLink={rickAndMorty.gitLink}
                nextProject={rickAndMorty.nextProjectTitle}
                nextProjectLink={rickAndMorty.nextProjectLink}
                title={rickAndMorty.title}
                tools={rickAndMorty.tools}
                type={rickAndMorty.type}
                year={rickAndMorty.year}
                webSite={rickAndMorty.webSite}
                image={rickAndMorty.image}
              />
            }
          />
          <Route
            path="notes"
            element={
              <Project
                backgroundColor={notes.backgroundColor}
                description={notes.description}
                gitLink={notes.gitLink}
                nextProject={notes.nextProjectTitle}
                nextProjectLink={notes.nextProjectLink}
                title={notes.title}
                tools={notes.tools}
                type={notes.type}
                year={notes.year}
                webSite={notes.webSite}
                image={notes.image}
              />
            }
          />
          <Route
            path="fakeChat"
            element={
              <Project
                backgroundColor={fakeChat.backgroundColor}
                description={fakeChat.description}
                gitLink={fakeChat.gitLink}
                nextProject={fakeChat.nextProjectTitle}
                nextProjectLink={fakeChat.nextProjectLink}
                title={fakeChat.title}
                tools={fakeChat.tools}
                type={fakeChat.type}
                year={fakeChat.year}
                webSite={fakeChat.webSite}
                image={fakeChat.image}
              />
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
