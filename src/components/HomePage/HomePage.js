import React from "react";
import styles from "./HomePage.module.css";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import PastProjects from "../PastProjects/PastProjects";
import About from "../About/About";

const HomePage = () => {
  return (
    <>
      <div className={styles["page-container"]}>
        <Skills />
        <Contact />
        <PastProjects />
        <About />
      </div>
    </>
  );
};

export default HomePage;
