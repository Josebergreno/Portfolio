import styles from "./PastProjects.module.css";
import CodeIcon from "@mui/icons-material/Code";

const PastProjects = (props) => {
  return (
    <div key="pastProjects" className={styles["container"]}>
      <div className={styles["past-projects"]}>Past projects</div>
      <CodeIcon />
    </div>
  );
};

export default PastProjects;
