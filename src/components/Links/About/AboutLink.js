import styles from "./AboutLink.module.css";
import logo from "../../UI/Icons/logo-cropped.svg";
import avatar from "../../UI/Icons/avatar.svg";
import { Link } from "react-router-dom";
import Line from "./Line";
import { useEffect, useState } from "react";

const AboutLink = (props) => {
  const [activeLetter, setActiveLetter] = useState("");
  const [randomNum, setRandomNum] = useState(0);

  const headerEffect = ["Hi I'm", "Joe.", "Web", "Developer"];
  const splitArr = headerEffect.join("").split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNum(Math.floor(Math.random() * 21) + 1);
      setActiveLetter(splitArr[randomNum]);
    }, (randomNum * 1000) / 6);
    return () => clearInterval(interval);
  }, [activeLetter, randomNum, splitArr]);

  return (
    <>
      <Link to="/about" onClick={props.onClick} className={styles["container"]}>
        <div className={styles["heading-container"]}>
          <h1 className={styles["h1"]}>
            {headerEffect.map((val) => (
              <span
                key={val}
                className={styles[val === "Joe." ? "joe" : undefined]}
              >
                {val.split("").map((val, i) => (
                  <span
                    className={
                      val === activeLetter && activeLetter !== " "
                        ? styles["flicker"]
                        : styles["span"]
                    }
                    key={Math.random()}
                  >
                    {val}
                  </span>
                ))}
              </span>
            ))}
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
        <Line />
      </Link>
    </>
  );
};

export default AboutLink;
