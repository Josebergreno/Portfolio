import styles from "./SkillsLink.module.css";
import CodeIcon from "@mui/icons-material/Code";
import { Link, Outlet } from "react-router-dom";

const SkillsLink = (props) => {
  return (
    <>
      <Link
        to="/skills"
        className={styles["container"]}
        onClick={props.onClick}
      >
        <div className={styles["skills-container"]}>
          <div className={styles["text-holder"]}>
            Skills <CodeIcon sx={{ color: "rgb(60, 170, 60)" }} />
          </div>
          <div className={styles["click-here"]}>
            Click here to check out my skills!
          </div>
        </div>
      </Link>
      <Outlet />
    </>
  );
};

export default SkillsLink;
