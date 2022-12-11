import React from "react";
import styles from "./Line.module.css";
import { useRef, useEffect, useState } from "react";
const Line = () => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(ref.current.parentElement.offsetWidth);
    setHeight(ref.current.parentElement.offsetHeight);
  }, [width, height]);

  const roundedWidth = Math.round(width / 6.7);
  const arrayWidth = Array.from({ length: roundedWidth }, (val) => (val = 1));
  console.log(height);
  return (
    <div ref={ref} className={styles["line"]}>
      {arrayWidth.map((val) => (
        <div key={Math.random()} className={styles["line-item"]}>
          _
        </div>
      ))}
    </div>
  );
};

export default Line;
