import styles from "./About.module.css";

const About = (props) => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["header"]}>Hi, I'm Joe. Web Developer.</h1>
      <div className={styles["logo-container"]}>
        <div className={styles["logo"]}></div>
      </div>
    </div>
  );
};

export default About;
