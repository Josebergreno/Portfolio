import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/Pages/DynamicPage";
import PastProjects from "./components/Pages/DynamicPage";
import SkillsPage from "./components/Pages/DynamicPage";

import NoMatch from "./components/NoMatch";
// this one works
import Contact from "./components/Pages/DynamicPage";
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
        <Route index path="/*" element={<HomePage />} />
        <Route path=":handle" element={<AboutPage />} />
        <Route path=":handle" element={<SkillsPage />} />
        <Route path=":handle" element={<PastProjects />} />
        <Route
          path=":handle"
          element={<Contact hey={() => console.log("hey")} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
