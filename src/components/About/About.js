import styles from "./About.module.css";
import logo from "../../UI/logo-cropped.svg";
import avatar from "../../UI/avatar.svg";
import { Link, Outlet } from "react-router-dom";

const About = (props) => {
  return (
    <>
      <Link to="/about" className={styles["container"]}>
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
      </Link>
      {/* <Outlet /> */}
    </>
  );
};

export default About;
