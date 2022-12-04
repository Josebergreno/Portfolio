import React from "react";
import styles from "./BreadCrumbs.module.css";

const BreadCrumbs = (props) => {
  console.log(props);
  return (
    <div className={styles["bread-crumb--container"]}>
      <ul className={styles["list"]}>
        <li>
          <a className={styles["link"]} aria-label="Home" key="1" href="/">
            Home
          </a>
        </li>
        <p className={styles["seperator"]}>{">"}</p>
        <li>
          <p className={styles["current-location"]}>{props.contentHeader[2]}</p>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
