import styles from "./CommandLine.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";
import KeyboardOutlinedIcon from "@mui/icons-material/KeyboardOutlined";

const CommandLine = () => {
  const today = new Date().toDateString();

  const update = () => {
    return "Prompt System [Latest update" + " " + `${today}+ "]"`;
  };

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
        <div className={styles["first-line"]}>{update()}</div>
        <div className={styles["second-line"]}>
          (c) Joseph's Corporation. All rights reserved.
        </div>
        <div className={styles["code"]}>
          C:Users\Joseph\josephs-portfolio> cd About
        </div>
      </div>
    </div>
  );
};

export default CommandLine;
