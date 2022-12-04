import styles from "./Contact.module.css";
import SendIcon from "@mui/icons-material/Send";
import { Link, Outlet } from "react-router-dom";

const Contact = (props) => {
  return (
    <>
      <Link to="/contact" className={styles["container"]}>
        <div className={styles["contact-container"]}>
          <div className={styles["contact"]}>Contact</div>
          <SendIcon />
        </div>
      </Link>
      {/* <Outlet /> */}
    </>
  );
};

export default Contact;
