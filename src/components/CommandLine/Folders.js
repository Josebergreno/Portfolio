import styles from "./Folders.module.css";
import folderIcon from "../UI/folderIcon.svg";

const Folders = () => {
  const folderLabels = ["about", "contact", "skills", "past-Projects"];

  const content = folderLabels.map((val) => {
    return (
      <div className={styles["folder"]} key={val}>
        <div className={styles["img-container"]}>
          <img src={folderIcon} alt={val} className={styles["image"]} />
        </div>
        <span className={styles["folder-label"]}>{val}</span>
      </div>
    );
  });

  return <div className={styles["folder-container"]}>{content}</div>;
};

export default Folders;
