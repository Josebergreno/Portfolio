import React from "react";
import CommandLine from "./CommandLine";
import Folders from "./Folders";
import styles from "./CmdLineLayout.module.css";

const CmdLineLayout = () => {
  return (
    <div className={styles["pages-container"]}>
      <CommandLine />
      <Folders />
    </div>
  );
};

export default CmdLineLayout;
