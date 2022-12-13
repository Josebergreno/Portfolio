import React from "react";
import styles from "./SkillsPageIndiv.module.css";
import { Divider } from "@mui/material";

const SkillsPageIndiv = (props) => {
  const navigate = () => {
    if (props.refState === "Material-UI") {
      return description.mui;
    } else if (props.refState === "React") {
      return description.react;
    } else if (props.refState === "Typescript") {
      return description.typescript;
    } else if (props.refState === "Javascript") {
      return description.javascript;
    } else if (props.refState === "CSS") {
      return description.css;
    } else if (props.refState === "HTML") {
      return description.html;
    } else if (props.refState === "git") {
      return description.git;
    } else if (props.refState === "React") {
      return description.react;
    } else if (props.refState === "Responsive Design") {
      return description.responsive;
    } else if (props.refState === "Github") {
      return description.github;
    }
  };

  const description = {
    mui: (
      <div className={styles["description"]}>
        Material UI is an open-source React component library. It includes a
        comprehensive collection of prebuilt components that are ready for use
        in production right out of the box.
      </div>
    ),
    react: (
      <div className={styles["description"]}>
        What is React used for? It's used for building interactive user
        interfaces and web applications quickly and efficiently with
        significantly less code than you would with vanilla JavaScript.
      </div>
    ),
    typescript: (
      <div className={styles["description"]}>
        TypeScript extends JavaScript and improves the developer experience. It
        enables developers to add type safety to their projects.
      </div>
    ),
    javascript: (
      <div className={styles["description"]}>
        JavaScript is a scripting language that enables you to create
        dynamically updating content, control multimedia, animate images, and
        pretty much everything else.
      </div>
    ),
    css: (
      <div className={styles["description"]}>
        CSS (Cascading Style Sheets) is used to style and layout web pages — for
        example, to alter the font, color, size, and spacing of your content,
        split it into multiple columns, or add animations and other decorative
        features.
      </div>
    ),
    html: (
      <div className={styles["description"]}>
        HTML (HyperText Markup Language) is the code that is used to structure a
        web page and its content. For example, content could be structured
        within a set of paragraphs, a list of bulleted points, or using images
        and data tables.
      </div>
    ),
    responsive: (
      <div className={styles["description"]}>
        Responsive web design (RWD) is a web development approach that creates
        dynamic changes to the appearance of a website, depending on the screen
        size and orientation of the device being used to view it.
      </div>
    ),
    git: (
      <div className={styles["description"]}>
        Git is a free and open source distributed version control system
        designed to handle everything from small to very large projects with
        speed and efficiency.
      </div>
    ),
    github: (
      <div className={styles["description"]}>
        GitHub is a code hosting platform for version control and collaboration.
        It lets you and others work together on projects from anywhere.
      </div>
    ),
  };
  return (
    <div className={styles["skills"]}>
      <div className={styles["header"]}>
        <button onClick={props.onBackClick} className={styles["button"]}>
          back
        </button>
        <span className={styles["title"]}>{props.refState}</span>
      </div>
      <Divider variant="middle" sx={{ backgroundColor: "rgb(60, 170, 60)" }} />
      <div className={styles["body"]}>{navigate()}</div>
    </div>
  );
};

export default SkillsPageIndiv;
