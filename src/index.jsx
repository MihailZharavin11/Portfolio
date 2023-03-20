import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./scss/main.scss";
import "normalize.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { FilmX } from "./pages/FilmX";
import { Layout } from "./layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="filmx" element={<FilmX />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
