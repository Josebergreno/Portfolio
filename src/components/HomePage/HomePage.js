import React from "react";
import styles from "./HomePage.module.css";
import SkillsLink from "../Links/Skills/SkillsLink";
import ContactLink from "../Links/Contact/ContactLink";
import PastProjectsLink from "../Links/PastProjects/PastProjectsLink";
import AboutLink from "../Links/About/AboutLink";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const HomePage = (props) => {
  const [linkLocation, setLinkLocation] = useState("");

  const skillsHandler = () => {
    setLinkLocation("skills");
  };
  const aboutHandler = () => {
    setLinkLocation("about");
  };
  const contactHandler = () => {
    setLinkLocation("contact");
  };
  const pastProjectsHandler = () => {
    setLinkLocation("pastProjects");
  };

  return (
    <div className={styles["page-container"]}>
      <div className={styles["link-container"]}>
        <SkillsLink
          onClick={() => skillsHandler()}
          linkLocation={linkLocation}
        />
        <ContactLink
          onClick={() => contactHandler()}
          linkLocation={linkLocation}
        />
        <PastProjectsLink
          onClick={() => pastProjectsHandler()}
          linkLocation={linkLocation}
        />
        <AboutLink onClick={() => aboutHandler()} linkLocation={linkLocation} />
      </div>
      <div className={styles["bottom"]}>
        Welcome to <span className={styles["webName"]}>josephthedev.com</span>.
        Powered by
        <img
          alt={"react-icon"}
          className={styles["icon"]}
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Coffee_cup_icon.svg"
        />
        and
        <img
          alt={"react-icon"}
          className={styles["icon"]}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        />
      </div>
      <Outlet />
    </div>
  );
};

export default HomePage;
