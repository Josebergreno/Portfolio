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
          <div className={styles["skills"]}>Skills</div>
          <CodeIcon />
        </div>
      </Link>
      <Outlet />
    </>
  );
};

export default SkillsLink;
