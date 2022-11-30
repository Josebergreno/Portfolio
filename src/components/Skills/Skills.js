import styles from "./Skills.module.css";
import SendIcon from "@mui/icons-material/Send";

const Skills = (props) => {
  return (
    <div key="skills" className={styles["container"]}>
      <div>Skills</div>
      <SendIcon></SendIcon>
    </div>
  );
};

export default Skills;
