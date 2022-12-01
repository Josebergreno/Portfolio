import styles from "./Skills.module.css";
import CodeIcon from "@mui/icons-material/Code";

const Skills = (props) => {
  return (
    <a href="www.google.com" className={styles["container"]}>
      <div className={styles["skills-container"]}>
        <div className={styles["skills"]}>Skills</div>
        <CodeIcon />
      </div>
    </a>
  );
};

export default Skills;
