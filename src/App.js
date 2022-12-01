import styles from "./App.module.css";
import Contact from "./components/Contact/Contact";
import PastProjects from "./components/PastProjects/PastProjects";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import video from "./UI/paper-image.mp4";

const App = () => {
  console.log(video);
  const colorTheme = {
    blue: "#4717F6",
    black: "#0e0B16",
    purple: "#A239CA",
    gray: "#E7DFDD",
  };

  return (
    <div className={styles["page-container"]}>
      <video muted autoPlay loop className={styles["video"]}>
        <source src={video} type={"video/mp4"}></source>
      </video>
      <Skills />
      <Contact />
      <PastProjects />
      <About />
    </div>
  );
};

export default App;
