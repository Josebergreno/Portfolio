import React from "react";
import styles from "./HomePage.module.css";
import SkillsLink from "../Skills/SkillsLink";
import ContactLink from "../Contact/Link/ContactLink";
import PastProjectsLink from "../PastProjects/PastProjectsLink";
import AboutLink from "../About/AboutLink";
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
    <>
      <div className={styles["page-container"]}>
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
      <Outlet />
    </>
  );
};

export default HomePage;
