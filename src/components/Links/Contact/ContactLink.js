import React from "react";
import styles from "./ContactLink.module.css";
import SendIcon from "@mui/icons-material/Send";
import { Link, Outlet } from "react-router-dom";

const ContactLink = (props) => {
  return (
    <>
      <Link
        to="/contact"
        onClick={props.onClick}
        className={styles["container"]}
      >
        <div className={styles["contact-container"]}>
          <div className={styles["text-holder"]}>
            Contact
            <SendIcon sx={{ color: "rgb(60, 170, 60)" }} />
          </div>
          <div className={styles["click-here"]}>
            Click here to see Past Projects
          </div>
        </div>
      </Link>
      <Outlet />
    </>
  );
};

export default ContactLink;
