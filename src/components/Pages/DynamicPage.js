import React from "react";
import styles from "./DynamicPage.module.css";
import logo from "../UI/Icons/logo-cropped.svg";
import avatar from "../UI/Icons/avatar.svg";
import { Divider } from "@mui/material";
import BreadCrumbs from "../Breadcrumbs/BreadCrumbs";
import { useEffect, useState } from "react";
import CmdLineLayout from "../CommandLine/Layout/CmdLineLayout";
import { useParams } from "react-router-dom";

const DynamicPage = (props) => {
  const { handle } = useParams();

  const headerContent = () => {
    if (handle === "about") {
      return contentHeader[0];
    } else if (handle === "skills") {
      return contentHeader[1];
    } else if (handle === "past-projects") {
      return contentHeader[2];
    } else if (handle === "contact") {
      return contentHeader[3];
    }
  };

  const bodyContent = () => {
    if (handle === "contact") {
      return contentBody.contact;
    } else if (handle === "about") {
      return contentBody.about;
    } else if (handle === "past-projects") {
      return contentBody.pastProjects;
    } else if (handle === "skills") {
      return contentBody.skills;
    }
  };

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

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setTimeout(() => {
      counter < 6 && setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(interval);
  }, [counter]);

  return counter < 6 ? (
    <CmdLineLayout handle={handle} />
  ) : (
    <div className={styles["layout"]}>
      <div className={styles["about"]}>
        <h2 className={styles["header"]}>{headerContent()}</h2>
        <Divider variant="middle" />
        <div className={styles["text-content"]}>{bodyContent()}</div>
      </div>
      <div className={styles["avatar-container"]}>
        <img src={avatar} alt={"avatar"} className={styles["avatar"]} />
      </div>
      <div className={styles["logo-container"]}>
        <img className={styles["logo"]} src={logo} alt={"Logo"} />
      </div>
      <BreadCrumbs contentHeader={headerContent()} />
    </div>
  );
};

export default DynamicPage;
