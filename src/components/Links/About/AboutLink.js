import styles from "./AboutLink.module.css";
import logo from "../../UI/Icons/logo-cropped.svg";
import avatar from "../../UI/Icons/avatar.svg";
import { Link, Outlet } from "react-router-dom";

const AboutLink = (props) => {
  return (
    <>
      <Link to="/about" onClick={props.onClick} className={styles["container"]}>
        <div className={styles["header-container"]}>
          <h1 className={styles["header"]}>
            Hi, I'm <span className={styles["joe"]}>Joe</span>. Web Developer
          </h1>
        </div>
        <div className={styles["avatar-container"]}>
          <img src={avatar} alt={"avatar"} className={styles["avatar"]} />
        </div>

        <div className={styles["logo-container"]}>
          <img className={styles["logo"]} src={logo} alt={"Logo"} />
        </div>
        <div className={styles["computer-lines"]}></div>
      </Link>
      {/* <Outlet /> */}
    </>
  );
};

export default AboutLink;
