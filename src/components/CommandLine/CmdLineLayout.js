import React from "react";
import CommandLine from "./CommandLine";
import Folders from "./Folders";
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
