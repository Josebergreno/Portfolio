import styles from "./CommandLine.module.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";
import CropSquareOutlinedIcon from "@mui/icons-material/CropSquareOutlined";

const CommandLine = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["command-line--container"]}>
        <div className={styles["top-bar"]}>
          <MinimizeOutlinedIcon />
          <CropSquareOutlinedIcon />
          <CloseOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default CommandLine;
