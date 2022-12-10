import styles from "./AboutLink.module.css";
import logo from "../../UI/Icons/logo-cropped.svg";
import avatar from "../../UI/Icons/avatar.svg";
import { Link } from "react-router-dom";

const AboutLink = (props) => {
  return (
    <>
      <Link to="/about" onClick={props.onClick} className={styles["container"]}>
        <div className={styles["heading-container"]}>
          <h1 className={styles["h1"]}>
            <span className={styles["hi"]}>Hi, I'm</span>
            <span className={styles["joe"]}> Joe.</span>
            <span className={styles["web-dev"]}>Web developer</span>
          </h1>
        </div>

        <div className={styles["click-here--container"]}>
          <div className={styles["click-here"]}>
            Click here to learn a little about me:)
          </div>
        </div>
        <div className={styles["avatar-container"]}>
          <img src={avatar} alt={"avatar"} className={styles["avatar"]} />
        </div>
        <div className={styles["logo-container"]}>
          <img className={styles["logo"]} src={logo} alt={"Logo"} />
        </div>
      </Link>
    </>
  );
};

export default AboutLink;
