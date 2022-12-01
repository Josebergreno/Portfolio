import styles from "./PastProjects.module.css";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const PastProjects = (props) => {
  return (
    <a href="www.google.com" className={styles["container"]}>
      <div className={styles["past-projects--container"]}>
        <div className={styles["past-projects"]}>Past projects</div>
        <FolderOpenIcon />
      </div>
    </a>
  );
};

export default PastProjects;
