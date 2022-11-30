import styles from "./App.module.css";
import Contact from "./components/Contact/Contact";
import PastProjects from "./components/PastProjects/PastProjects";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

const App = () => {
  const colorTheme = {
    blue: "#4717F6",
    black: "#0e0B16",
    purple: "#A239CA",
    gray: "#E7DFDD",
  };

  return (
    <div className={styles["page-container"]}>
      <Skills />
      <Contact />
      <PastProjects />
      <About />
    </div>
  );
};

export default App;
