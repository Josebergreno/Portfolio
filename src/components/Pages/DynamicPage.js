import styles from "./DynamicPage.module.css";
import logo from "../UI/Icons/logo-cropped.svg";
import avatar from "../UI/Icons/avatar.svg";
import { Divider } from "@mui/material";
import BreadCrumbs from "../Breadcrumbs/BreadCrumbs";
import { useEffect, useState } from "react";
import CmdLineLayout from "../CommandLine/Layout/CmdLineLayout";
import { useParams } from "react-router-dom";

import ContactPage from "./PageComponents/Contact Page/ContactPage";
import AboutPage from "./PageComponents/About Page/AboutPage";

import GitHubIcon from "@mui/icons-material/GitHub";

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
    about: <AboutPage />,
    pastProjects: <>This is the past Projects page</>,
    skills: (
      <div className={styles["skills-layout"]}>
        <div className={styles["svg-container"]}>
          <img
            className={styles["react-icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          />
          <img
            className={styles["js-icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          />
          <img
            className={styles["css-icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
          />
        </div>
      </div>
    ),
    contact: <ContactPage />,
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
