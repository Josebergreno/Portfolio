import styles from "./App.module.css";
import Contact from "./components/Contact/Contact";
import PastProjects from "./components/PastProjects/PastProjects";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import video from "./UI/paper-image.mp4";
import CommandLine from "./components/CommandLine.js/CommandLine";
import Folders from "./components/CommandLine.js/Folders";

const App = () => {
  const colorTheme = {
    blue: "#4717F6",
    black: "#0e0B16",
    purple: "#A239CA",
    gray: "#E7DFDD",
  };

  return (
    // <div className={styles["page-container"]}>
    //   {/* <Skills />
    //   <Contact />
    //   <PastProjects />
    //   <About /> */}
    // </div>
    <div className={styles["pages-container"]}>
      <CommandLine />
      <Folders />
    </div>
  );
};

export default App;
