import styles from "./DynamicPage.module.css";
import logo from "../UI/Icons/logo-cropped.svg";
import avatar from "../UI/Icons/avatar.svg";
import { Divider, Icon } from "@mui/material";
import BreadCrumbs from "../Breadcrumbs/BreadCrumbs";
import { useEffect, useState } from "react";
import CmdLineLayout from "../CommandLine/Layout/CmdLineLayout";
import { useParams } from "react-router-dom";

import ContactPage from "./PageComponents/Contact Page/ContactPage";
import AboutPage from "./PageComponents/About Page/AboutPage";
import muiLogo from "../UI/Icons/material-ui.svg";

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
          <div className={styles["react-container"]}>
            <img
              className={styles["react-icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            />
          </div>
          <div className={styles["js-container"]}>
            <img
              className={styles["js-icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            />
          </div>
          <div className={styles["css-container"]}>
            <img
              className={styles["css-icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            />
          </div>
          <div className={styles["html-container"]}>
            <img
              className={styles["html-icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            />
          </div>
          <div className={styles["github-container"]}>
            <img
              className={styles["github-icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            />
          </div>
          <div className={styles["git-container"]}>
            <img
              className={styles["git-icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
            />
          </div>
          <div className={styles["mui-container"]}>
            <img className={styles["mui-icon"]} src={muiLogo} />
          </div>
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
