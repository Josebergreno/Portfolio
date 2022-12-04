import React from "react";
import CommandLine from "./CommandLine";
import Folders from "./Folders";

const CmdLineLayout = () => {
  return (
    <div className={styles["pages-container"]}>
      <CommandLine />
      <Folders />
    </div>
  );
};

export default CmdLineLayout;
