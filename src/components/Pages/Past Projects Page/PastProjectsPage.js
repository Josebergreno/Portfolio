import React from "react";
import styles from "./PastProjectsPage.module.css";
import snakeGameThumbnail from "./snake-game-thumbnail.png";

const PastProjectsPage = () => {
  return (
    <div className={styles["container"]}>
      <button className={styles["button"]}>back</button>
      <a href="https://sn8ke-game.netlify.app/" className={styles["link"]}>
        <img
          className={styles["snake-game--thumbnail"]}
          alt="snake-game"
          src={snakeGameThumbnail}
        ></img>
        Snake Game
      </a>
      <button className={styles["button"]}>next</button>
    </div>
  );
};

export default PastProjectsPage;
