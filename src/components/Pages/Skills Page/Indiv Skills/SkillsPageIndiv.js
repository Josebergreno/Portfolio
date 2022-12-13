import React from "react";
import styles from "./SkillsPageIndiv.module.css";
import { Divider } from "@mui/material";

const SkillsPageIndiv = (props) => {
  const description = {
    mui: (
      <>
        Material UI is an open-source React component library. It includes a
        comprehensive collection of prebuilt components that are ready for use
        in production right out of the box.
      </>
    ),
  };
  return (
    <div className={styles["skills"]}>
      <div className={styles["header"]}>
        <button onClick={props.onBackClick} className={styles["button"]}>
          back
        </button>
        <span className={styles["title"]}>{props.refState}</span>
      </div>
      <Divider variant="middle" sx={{ backgroundColor: "rgb(60, 170, 60)" }} />
      <div className={styles["body"]}>{description.mui}</div>
    </div>
  );
};

export default SkillsPageIndiv;
