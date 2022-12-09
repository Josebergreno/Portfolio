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
          or by the following social media platforms:
        </div>
        <div className={styles["link-container"]}>
          <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BcCnT6HKfS9qOo3uraWQrdw%3D%3D">
            <img
              alt="linkedin-icon"
              className={styles["linkedin-icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
            />
          </a>
          <a href="https://www.instagram.com/josebergreno">
            <img
              alt="instagram-icon"
              className={styles["instagram-icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
            />
          </a>
          <a href="https://github.com/Josebergreno">
            <img
              alt={"github-icon"}
              className={styles["github-icon"]}
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
