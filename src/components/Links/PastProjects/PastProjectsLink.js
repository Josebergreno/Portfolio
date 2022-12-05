import styles from "./PastProjectsLink.module.css";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { Link, Outlet } from "react-router-dom";

const PastProjectsLink = (props) => {
  return (
    <>
      <Link
        to="/past-projects"
        onClick={props.onClick}
        className={styles["container"]}
      >
        <div className={styles["past-projects--container"]}>
          <div className={styles["past-projects"]}>Past projects</div>
          <FolderOpenIcon />
        </div>
      </Link>
      <Outlet />
    </>
  );
};

export default PastProjectsLink;
