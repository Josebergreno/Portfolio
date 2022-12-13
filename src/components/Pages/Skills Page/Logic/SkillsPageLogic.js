import React from "react";

import { useState, useRef } from "react";
import SkillsMainPage from "../Main Page/SkillsMainPage";
import SkillsPageIndiv from "../Indiv Skills/SkillsPageIndiv";
const SkillsPageLogic = (props) => {
  const [refState, setRefState] = useState("start");
  const ref = useRef("start");
  const clickHandler = (e) => {
    e.target.focus();
    ref.current =
      e.target.localName === "div"
        ? e.target.lastChild.textContent
        : e.target.parentElement.lastChild.textContent;
    ref.current === "Material-UI" && setRefState(ref.current);
  };
  const backClickHandler = () => {
    ref.current = "back";
    setRefState(ref.current);
  };

  return refState === "start" || refState === "back" ? (
    <SkillsMainPage onClick={clickHandler} />
  ) : (
    <SkillsPageIndiv refState={refState} onBackClick={backClickHandler} />
  );
};

export default SkillsPageLogic;

// ref.current === "Material-UI" && <SkillsPageIndiv />;
