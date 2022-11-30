import styles from "./Contact.module.css";
import SendIcon from "@mui/icons-material/Send";

const Contact = (props) => {
  return (
    <div key="contact" className={styles["container"]}>
      <div>Contact</div>
      <SendIcon></SendIcon>
    </div>
  );
};

export default Contact;
