import React, { useEffect, useState } from "react";
import CmdLineLayout from "../../CommandLine/CmdLineLayout";

//set a counter in state
//once counter reaches 5, change state to render different component

// use a ref or state to determine which link what clicked and dynamically update the command line function along with rendering the next step after the command line dissapears

const ContactPage = () => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(counter);
      counter < 6 && setCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  return counter < 6 && <CmdLineLayout />;
};

export default ContactPage;
