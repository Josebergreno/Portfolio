import styles from "./About.module.css";
import logo from "../../UI/logo-cropped.svg";
import avatar from "../../UI/avatar.svg";

const About = (props) => {
  const boxShadow = {
    boxShadow: [
      "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset",
      "rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset",
      "rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset",
      "rgba(0, 0, 0, 0.06) 0px 2px 1px",
      "rgba(0, 0, 0, 0.09) 0px 4px 2px",
      " rgba(0, 0, 0, 0.09) 0px 8px 4px",
      "rgba(0, 0, 0, 0.09) 0px 16px 8px",
      "rgba(0, 0, 0, 0.09) 0px 32px 16px",
    ],
  };
  console.log(...boxShadow.boxShadow);

  return (
    <a href="www.google.com" className={styles["container"]}>
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
    </a>
  );
};

export default About;
