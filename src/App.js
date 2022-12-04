import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/AboutLink";
import PastProjects from "./components/PastProjects/PastProjectsLink";
import Skills from "./components/Skills/SkillsLink";

import NoMatch from "./components/NoMatch";
import ContactPage from "./components/Contact/Page/PageTimer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const colorTheme = {
    blue: "#4717F6",
    black: "#0e0B16",
    purple: "#A239CA",
    gray: "#E7DFDD",
  };

  return (
    <>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="past-projects" element={<PastProjects />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
