import React from "react";
import styles from "./PastProjectsPage.module.css";

const PastProjectsPage = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["indiv-project--container"]}>
        <img alt="snake-game" src="./snake-game-thumbnail.png"></img>
        <a href="https://sn8ke-game.netlify.app/" className={styles["link"]}>
          Snake Game
        </a>
      </div>
    </div>
  );
};

export default PastProjectsPage;
