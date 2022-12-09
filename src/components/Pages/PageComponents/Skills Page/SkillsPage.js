import React from "react";
import muiLogo from "../../../UI/Icons/material-ui.svg";
import styles from "./SkillsPage.module.css";

const SkillsPage = () => {
  return (
    <div className={styles["skills-layout"]}>
      <div className={styles["svg-container"]}>
        <div className={styles["react-container"]}>
          <img
            alt={"react-icon"}
            className={styles["react-icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          />
        </div>
        <div className={styles["js-container"]}>
          <img
            alt={"js-icon"}
            className={styles["js-icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          />
        </div>
        <div className={styles["css-container"]}>
          <img
            alt={"css-icon"}
            className={styles["css-icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          />
        </div>
        <div className={styles["html-container"]}>
          <img
            alt={"html-icon"}
            className={styles["html-icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          />
        </div>
        <div className={styles["github-container"]}>
          <img
            alt={"github-icon"}
            className={styles["github-icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          />
        </div>
        <div className={styles["git-container"]}>
          <img
            alt={"git-icon"}
            className={styles["git-icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
          />
        </div>
        <div className={styles["mui-container"]}>
          <img alt={"mui-icon"} className={styles["mui-icon"]} src={muiLogo} />
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
