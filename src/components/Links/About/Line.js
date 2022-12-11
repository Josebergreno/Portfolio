import React, { useRef } from "react";
import styles from "./Line.module.css";

const Line = () => {
  const ref = useRef("");

  console.log(ref === null || ref === undefined);
  console.log(ref.current.parentElement);

  return <hr ref={ref} className={styles["line"]} />;
};

export default Line;
