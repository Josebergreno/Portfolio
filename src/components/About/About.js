import styles from "./About.module.css";
import logo from "../../UI/logo-cropped.svg";

const About = (props) => {
  console.log(logo);
  return (
    <div className={styles["container"]}>
      <h1 className={styles["header"]}>Hi, I'm Joe. Web Developer.</h1>
      <div className={styles["logo-container"]}>
        <img className={styles["logo"]} src={logo} alt={"Logo"} />
      </div>
    </div>
  );
};

export default About;
