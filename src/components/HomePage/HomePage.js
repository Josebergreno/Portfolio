import React from "react";
import styles from "./HomePage.module.css";
import SkillsLink from "../Skills/SkillsLink";
import ContactLink from "../Contact/Link/ContactLink";
import PastProjectsLink from "../PastProjects/PastProjectsLink";
import AboutLink from "../About/AboutLink";

const HomePage = () => {
  return (
    <>
      <div className={styles["page-container"]}>
        <SkillsLink />
        <ContactLink />
        <PastProjectsLink />
        <AboutLink />
      </div>
    </>
  );
};

export default HomePage;
