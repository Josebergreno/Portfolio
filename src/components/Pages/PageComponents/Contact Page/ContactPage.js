import React from "react";
import styles from "./ContactPage.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const ContactPage = () => {
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
  return (
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
          or by filling out the form below.
        </div>
        <div className={styles["form-container"]}>
          <input className={styles["input-fields"]} placeholder="Your Email" />
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
      </div>
    </>
  );
};

export default ContactPage;
