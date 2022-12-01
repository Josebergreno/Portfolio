import styles from "./About.module.css";
import logo from "../../UI/logo-cropped.svg";
import avatar from "../../UI/avatar.svg";
import { Typography } from "@mui/material";

const About = (props) => {
  console.log(avatar);

  return (
    <div className={styles["container"]}>
      <div className={styles["header-container"]}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "10vmin",
            color: "black",
            gridColumn: "2/6",
          }}
        >
          Hi, I'm <span className={styles["joe"]}>Joe</span>. Web Developer
        </Typography>
      </div>
      <div className={styles["avatar-container"]}>
        <img src={avatar} alt={"avatar"} className={styles["avatar"]} />
      </div>

      <div className={styles["logo-container"]}>
        <img className={styles["logo"]} src={logo} alt={"Logo"} />
      </div>
    </div>
  );
};

export default About;
