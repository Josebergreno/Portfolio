import React from "react";
import styles from "./DynamicPage.module.css";
import logo from "../../../UI/logo-cropped.svg";
import avatar from "../../../UI/avatar.svg";
import { Divider } from "@mui/material";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";

const DynamicPage = (props) => {
  const contentHeader = ["About Me", "Skills", "Past Projects", "Contact"];
  const contentBody = {
    about: (
      <>
        Hi! I'm Joe. I'm a 27 year old web developer specialing in front end
        development and React framework applications. When i'm not designing and
        building websites, I love spending time outdoors, training Brazilian
        Jiu-Jitsu, and traveling the world with my wife. I also speak German,
        and am a huge dog lover.
      </>
    ),
    pastProjects: <>This is the past Projects page</>,
    skills: <>This is the skills page</>,
    contact: <>This is the contact page</>,
  };
  return (
    <div className={styles["layout"]}>
      <div className={styles["about"]}>
        <h2 className={styles["header"]}>{contentHeader[2]}</h2>
        <Divider variant="middle" />
        <div className={styles["text-content"]}>{contentBody.pastProjects}</div>
      </div>
      <div className={styles["avatar-container"]}>
        <img src={avatar} alt={"avatar"} className={styles["avatar"]} />
      </div>
      <div className={styles["logo-container"]}>
        <img className={styles["logo"]} src={logo} alt={"Logo"} />
      </div>
      <BreadCrumbs contentHeader={contentHeader} />
    </div>
  );
};

export default DynamicPage;
