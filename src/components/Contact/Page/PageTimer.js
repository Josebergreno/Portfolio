import React, { useEffect, useState } from "react";
import CmdLineLayout from "../../CommandLine/CmdLineLayout";
import DynamicPage from "./DynamicPage";

// use a ref or state to determine which link what clicked and dynamically update the command line function along with rendering the next step after the command line dissapears

const PageTimer = (props) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setTimeout(() => {
      counter < 6 && setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(interval);
  }, [counter]);

  return counter < 6 ? <CmdLineLayout /> : <DynamicPage />;
};

export default PageTimer;
