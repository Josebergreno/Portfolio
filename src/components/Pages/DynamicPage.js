import React from "react";
import styles from "./DynamicPage.module.css";
import logo from "../UI/Icons/logo-cropped.svg";
import avatar from "../UI/Icons/avatar.svg";
import { Divider, Input } from "@mui/material";
import BreadCrumbs from "../Breadcrumbs/BreadCrumbs";
import { useEffect, useState } from "react";
import CmdLineLayout from "../CommandLine/Layout/CmdLineLayout";
import { useParams } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const DynamicPage = (props) => {
  const { handle } = useParams();

  const emailClickHandler = () => {
    const link =
      "mailto:bergren.bergren@yahoo.com" +
      "&subject=" +
      encodeURIComponent(
        document.getElementsByClassName("This is my subject")
      ) +
      "&body=" +
      encodeURIComponent(document.getElementById("myText").value);
  };

  const headerContent = () => {
    if (handle === "about") {
      return contentHeader[0];
    } else if (handle === "skills") {
      return contentHeader[1];
    } else if (handle === "past-projects") {
      return contentHeader[2];
    } else if (handle === "contact") {
      return contentHeader[3];
    }
  };

  const bodyContent = () => {
    if (handle === "contact") {
      return contentBody.contact;
    } else if (handle === "about") {
      return contentBody.about;
    } else if (handle === "past-projects") {
      return contentBody.pastProjects;
    } else if (handle === "skills") {
      return contentBody.skills;
    }
  };

  const contentHeader = ["About Me", "Skills", "Past Projects", "Contact"];
  const contentBody = {
    about: (
      <>
        Hi! I'm Joe. I'm a 27 year old web developer specializing in front end
        development and React framework applications. When I'm not designing and
        building websites, I love spending time outdoors, training Brazilian
        Jiu-Jitsu, and traveling the world with my wife. I also speak German,
        and am a huge dog lover.
      </>
    ),
    pastProjects: <>This is the past Projects page</>,
    skills: <>This is the skills page</>,
    contact: (
      <>
        <div className={styles["contact-layout"]}>
          <div>
            I can be contacted via e-mail by clicking{" "}
            <a
              className={styles["email-href"]}
              href="mailto:bergren.bergren@yahoo.com"
            >
              here
            </a>{" "}
            or by filling out the form below. You can also get in touch through
            the following platforms:
          </div>
          <div className={styles["form-container"]}>
            <input
              className={styles["input-fields"]}
              placeholder="Your Email"
            />
            <input className={styles["input-fields"]} placeholder="Subject" />
            <textarea
              className={styles["body-input"]}
              placeholder="Please write any questions here, and I'll get back to you as soon as I can!"
              rows={6}
              // onChange={handleChange}
            ></textarea>
            <button
              className={styles["form-button"]}
              size="small"
              variant="outlined"
              onClick={() => emailClickHandler()}
            >
              Send
            </button>
          </div>
          {/* 
          <div className={styles["icon-container"]}>
            <LinkedInIcon />
            <EmailIcon />
          </div> */}
        </div>
      </>
    ),
  };

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setTimeout(() => {
      counter < 6 && setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(interval);
  }, [counter]);

  return counter < 6 ? (
    <CmdLineLayout handle={handle} />
  ) : (
    <div className={styles["layout"]}>
      <div className={styles["about"]}>
        <h2 className={styles["header"]}>{headerContent()}</h2>
        <Divider
          variant="middle"
          sx={{ backgroundColor: "rgb(60, 170, 60)" }}
        />
        <div className={styles["text-content"]}>{bodyContent()}</div>
      </div>
      <div className={styles["avatar-container"]}>
        <img src={avatar} alt={"avatar"} className={styles["avatar"]} />
      </div>
      <div className={styles["logo-container"]}>
        <img className={styles["logo"]} src={logo} alt={"Logo"} />
      </div>
      <BreadCrumbs contentHeader={headerContent()} />
    </div>
  );
};

export default DynamicPage;
