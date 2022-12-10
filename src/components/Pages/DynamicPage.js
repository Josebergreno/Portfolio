import styles from "./DynamicPage.module.css";
import { Divider } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import logo from "../UI/Icons/logo-cropped.svg";
import avatar from "../UI/Icons/avatar.svg";
import BreadCrumbs from "../Breadcrumbs/BreadCrumbs";
import CmdLineLayout from "../CommandLine/Layout/CmdLineLayout";
import ContactPage from "./Contact Page/ContactPage";
import AboutPage from "./About Page/AboutPage";
import SkillsPage from "./Skills Page/SkillsPage";
import PastProjectsPage from "./Past Projects Page/PastProjectsPage";

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

  const cmdTiming = useCallback(() => {
    if (handle === "past-projects") {
      return 8;
    } else return 6;
  }, [handle]);

  const contentHeader = ["About Me", "Skills", "Past Projects", "Contact"];
  const contentBody = {
    about: <AboutPage />,
    pastProjects: <PastProjectsPage />,
    skills: <SkillsPage />,
    contact: <ContactPage />,
  };

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setTimeout(() => {
      counter < cmdTiming() && setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(interval);
  }, [counter, cmdTiming]);

  return counter < cmdTiming() ? (
    <CmdLineLayout handle={handle} />
  ) : (
    <div className={styles["layout"]}>
      <div className={styles["about"]}>
        <h2 className={styles["header"]}>{headerContent()}</h2>
        <Divider
          variant="middle"
          sx={{ backgroundColor: "rgb(60, 170, 60)" }}
        />
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
