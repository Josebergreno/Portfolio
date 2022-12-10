import React from "react";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
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
          or on the following platforms. Check me out on GitHub too!
        </div>
        <div className={styles["link-container--parent"]}>
          <div className={styles["link-container"]}>
            <a
              className={styles["indiv-icon--container"]}
              href="https://www.linkedin.com/in/joseph-bergren-300148a8"
            >
              <img
                alt="linkedin-icon"
                className={styles["icon"]}
                src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
              />
            </a>
            <a
              className={styles["indiv-icon--container"]}
              href="https://www.instagram.com/josebergreno"
            >
              <img
                alt="instagram-icon"
                className={styles["icon"]}
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
              />
            </a>
            <a
              className={styles["indiv-icon--container"]}
              href="https://github.com/Josebergreno"
            >
              <img
                alt={"github-icon"}
                className={styles["icon"]}
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
