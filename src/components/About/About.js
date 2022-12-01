import styles from "./About.module.css";
import logo from "../../UI/logo-cropped.svg";
import { Typography } from "@mui/material";

const About = (props) => {
  console.log(logo);
  return (
    <div className={styles["container"]}>
      <div className={styles["header-container"]}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "10vmin",
            color: "white",
            gridColumn: "2/6",
          }}
        >
          Hi, I'm Joe. Web Developer
        </Typography>
      </div>

      <div className={styles["logo-container"]}>
        <img className={styles["logo"]} src={logo} alt={"Logo"} />
      </div>
    </div>
  );
};

export default About;
