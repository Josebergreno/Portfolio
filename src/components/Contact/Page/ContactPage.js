import React, { useEffect, useState } from "react";
import CmdLineLayout from "../../CommandLine/CmdLineLayout";
import styles from "./ContactPage.module.css";
import logo from "../../../UI/logo-cropped.svg";
import avatar from "../../../UI/avatar.svg";
import { Divider } from "@mui/material";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import { Outlet } from "react-router-dom";

//set a counter in state
//once counter reaches 5, change state to render different component

// use a ref or state to determine which link what clicked and dynamically update the command line function along with rendering the next step after the command line dissapears

const ContactPage = () => {
  const [counter, setCounter] = useState(1);

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

  useEffect(() => {
    const interval = setTimeout(() => {
      console.log(counter);
      counter < 6 && setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(interval);
  }, [counter]);

  return counter < 6 ? (
    <CmdLineLayout />
  ) : (
    <>
      <div className={styles["layout"]}>
        <div className={styles["about"]}>
          <h2 className={styles["header"]}>{contentHeader[2]}</h2>
          <Divider variant="middle" />
          <div className={styles["text-content"]}>
            {contentBody.pastProjects}
          </div>
        </div>
        <div className={styles["avatar-container"]}>
          <img src={avatar} alt={"avatar"} className={styles["avatar"]} />
        </div>
        <div className={styles["logo-container"]}>
          <img className={styles["logo"]} src={logo} alt={"Logo"} />
        </div>
        <BreadCrumbs contentHeader={contentHeader} />
      </div>
      <Outlet />
    </>
  );
};

export default ContactPage;
