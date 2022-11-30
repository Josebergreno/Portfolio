import styles from "./About.module.css";

import QuizIcon from "@mui/icons-material/Quiz";

const About = (props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["about"]}>About</div>
      <QuizIcon />
    </div>
  );
};

export default About;
