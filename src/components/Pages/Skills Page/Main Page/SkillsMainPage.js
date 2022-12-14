import React from "react";
import responsiveIcon from "../../../UI/Icons/responsive.svg";
import styles from "./SkillsMainPage.module.css";

import muiLogo from "../../../../components/UI/Icons/material-ui.svg";
const SkillsMainPage = (props) => {
  return (
    <div className={styles["svg-main--container"]}>
      <div className={styles["row-container"]}>
        <div
          tabIndex={0}
          reference={props.reference}
          onClick={props.onClick}
          onTouchStart={props.onClick}
          className={styles["indiv-icon--container"]}
        >
          <img
            alt={"react-icon"}
            className={styles["icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          />
          <span className={styles["under-title"]}>React</span>
        </div>

        <div
          tabIndex={0}
          reference={props.reference}
          onClick={props.onClick}
          onTouchStart={props.onClick}
          className={styles["indiv-icon--container"]}
        >
          <img alt={"mui-icon"} className={styles["icon"]} src={muiLogo} />
          <span className={styles["under-title"]}>Material-UI</span>
        </div>

        <div
          tabIndex={0}
          onClick={props.onClick}
          onTouchStart={props.onClick}
          reference={props.reference}
          className={styles["indiv-icon--container"]}
        >
          <img
            alt={"typescript-icon"}
            className={styles["icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          />
          <span className={styles["under-title"]}>Typescript</span>
        </div>
      </div>
      <div className={styles["row-container"]}>
        <div
          tabIndex={0}
          reference={props.reference}
          onClick={props.onClick}
          onTouchStart={props.onClick}
          className={styles["indiv-icon--container"]}
        >
          <img
            alt={"javascript-icon"}
            className={styles["icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          />
          <span className={styles["under-title"]}>Javascript</span>
        </div>
        <div
          tabIndex={0}
          reference={props.reference}
          onClick={props.onClick}
          onTouchStart={props.onClick}
          className={styles["indiv-icon--container"]}
        >
          <img
            alt={"css-icon"}
            className={styles["icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
          />
          <span className={styles["under-title"]}>CSS</span>
        </div>
        <div
          tabIndex={0}
          reference={props.reference}
          onClick={props.onClick}
          onTouchStart={props.onClick}
          className={styles["indiv-icon--container"]}
        >
          <img
            alt={"html-icon"}
            className={styles["icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Devicon-html5-plain.svg"
          />
          <span className={styles["under-title"]}>HTML</span>
        </div>
      </div>
      <div className={styles["row-container"]}>
        <div
          tabIndex={0}
          reference={props.reference}
          onClick={props.onClick}
          onTouchStart={props.onClick}
          className={styles["indiv-icon--container"]}
        >
          <img
            alt={"responsive-icon"}
            className={styles["icon"]}
            src={responsiveIcon}
          />
          <span className={styles["under-title"]}>Responsive Design</span>
        </div>
        <div
          tabIndex={0}
          reference={props.reference}
          onClick={props.onClick}
          onTouchStart={props.onClick}
          className={styles["indiv-icon--container"]}
        >
          <img
            alt={"git-icon"}
            className={styles["git-icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
          />
          <span className={styles["under-title"]}>git</span>
        </div>
        <div
          tabIndex={0}
          reference={props.reference}
          onClick={props.onClick}
          onTouchStart={props.onClick}
          className={styles["indiv-icon--container"]}
        >
          <img
            alt={"github-icon"}
            className={styles["github-icon"]}
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          />
          <span className={styles["under-title"]}>Github</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsMainPage;
