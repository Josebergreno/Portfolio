import styles from "./CommandLine.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";
import { useEffect, useState } from "react";

const CommandLine = () => {
  const directory = {
    about: "cd About",
    contact: "cd Contact",
    projects: "cd Past Projects",
    skills: "cd Skills",
  };
  const [typing, setTyping] = useState(directory.about);

  // updating first line date
  const today = new Date().toDateString();
  const firstLineUpdate = () => {
    return `Prompt System [Latest update ${today}]`;
  };
  // typing function for changing folders
  const CurrentLocation = "C:Users\\Joseph\\Desktop\\josephs-portfolio>";

  useEffect(() => {
    const interval = setInterval(() => {
      setTyping((prev) => {
        return prev;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  //   typing();

  //create a flashing typing effect div that blinks 5 times and then trigger the typing function

  return (
    <div className={styles["main-container"]}>
      <div className={styles["command-line--container"]}>
        <div className={styles["top-bar"]}>
          <div>
            <KeyboardOutlinedIcon fontSize="small" />
            <span className={styles["title"]}>Joe's Command Line</span>
          </div>

          <div className={styles["grouping"]}>
            <MinimizeOutlinedIcon fontSize="small" />
            <CropSquareOutlinedIcon fontSize="small" />
            <CloseOutlinedIcon fontSize="small" />
          </div>
        </div>
        <div className={styles["first-line"]}>{firstLineUpdate()}</div>
        <div className={styles["second-line"]}>
          (c) Joseph's Corporation. All rights reserved.
        </div>
        <div className={styles["code"]}>
          {CurrentLocation}
          <div className={styles["typing"]}>|</div>
          <div className={styles["element"]}>{directory.about}</div>
        </div>
      </div>
    </div>
  );
};

export default CommandLine;
