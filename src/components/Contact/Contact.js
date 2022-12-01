import styles from "./Contact.module.css";
import SendIcon from "@mui/icons-material/Send";

const Contact = (props) => {
  return (
    <a href="www.google.com" className={styles["container"]}>
      <div className={styles["contact-container"]}>
        <div className={styles["contact"]}>Contact</div>
        <SendIcon></SendIcon>
      </div>
    </a>
  );
};

export default Contact;
