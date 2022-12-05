import React from "react";
import CommandLine from "../Command Line/CommandLine";
import Folders from "../Folders/Folders";
import styles from "./CmdLineLayout.module.css";

const CmdLineLayout = (props) => {
  return (
    <div className={styles["pages-container"]}>
      <CommandLine handle={props.handle} />
      <Folders />
    </div>
  );
};

export default CmdLineLayout;
