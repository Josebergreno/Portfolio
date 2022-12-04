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
          <div className={styles["contact"]}>Contact</div>
          <SendIcon />
        </div>
      </Link>
      <Outlet />
    </>
  );
};

export default ContactLink;
