import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/AboutLink";
import PastProjects from "./components/PastProjects/PastProjectsLink";
import Skills from "./components/Skills/SkillsLink";

import NoMatch from "./components/NoMatch";
import ContactPage from "./components/Contact/Page/ContactPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="past-projects" element={<PastProjects />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
