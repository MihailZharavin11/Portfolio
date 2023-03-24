import { Routes, Route } from "react-router-dom";
import { Project } from "./pages/Project";
import { Layout } from "./layout";
import { filmX, rickAndMorty, notes, fakeChat } from "./data";
import { Home } from "./pages/Home";
import { useRef } from "react";

const App = () => {
  const workRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <Routes>
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
              description={filmX.description}
              gitLink={filmX.gitLink}
              nextProject={filmX.nextProjectTitle}
              nextProjectLink={filmX.nextProjectLink}
              title={filmX.title}
              tools={filmX.tools}
              type={filmX.type}
              year={filmX.year}
              webSite={filmX.webSite}
            />
          }
        />
        <Route
          path="rick-morty"
          element={
            <Project
              description={rickAndMorty.description}
              gitLink={rickAndMorty.gitLink}
              nextProject={rickAndMorty.nextProjectTitle}
              nextProjectLink={rickAndMorty.nextProjectLink}
              title={rickAndMorty.title}
              tools={rickAndMorty.tools}
              type={rickAndMorty.type}
              year={rickAndMorty.year}
              webSite={rickAndMorty.webSite}
            />
          }
        />
        <Route
          path="notes"
          element={
            <Project
              description={notes.description}
              gitLink={notes.gitLink}
              nextProject={notes.nextProjectTitle}
              nextProjectLink={notes.nextProjectLink}
              title={notes.title}
              tools={notes.tools}
              type={notes.type}
              year={notes.year}
              webSite={notes.webSite}
            />
          }
        />
        <Route
          path="fakeChat"
          element={
            <Project
              description={fakeChat.description}
              gitLink={fakeChat.gitLink}
              nextProject={fakeChat.nextProjectTitle}
              nextProjectLink={fakeChat.nextProjectLink}
              title={fakeChat.title}
              tools={fakeChat.tools}
              type={fakeChat.type}
              year={fakeChat.year}
              webSite={fakeChat.webSite}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
