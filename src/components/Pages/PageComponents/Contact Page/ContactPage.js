import React from "react";
import styles from "./ContactPage.module.css";
import { useState } from "react";

const ContactPage = () => {
  // email validation
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emailWasTouched, setEmailWasTouched] = useState(false);
  // subject validation
  const [enteredSubject, setEnteredSubject] = useState("");
  const [subjectValid, setSubjectValid] = useState(false);
  const [subjectWasTouched, setSubjectWasTouched] = useState(false);
  // // body validation
  const [enteredBody, setEnteredBody] = useState("");
  const [bodyValid, setBodyValid] = useState(false);
  const [bodyWasTouched, setBodyWasTouched] = useState(false);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailInputIsInvalid = !emailValid && emailWasTouched;

  const emailInputClasses = emailInputIsInvalid
    ? `${styles["input-fields--invalid"]}`
    : `${styles["input-fields--valid"]}`;

  const emailHandler = (e) => {
    setEnteredEmail(e.target.value);
    if (e.target.value.trim() !== "" && e.target.value.includes("@")) {
      setEmailValid(true);
      setEmailWasTouched(true);
    } else setEmailValid(false);
    setEmailWasTouched(true);
  };

  const subjectInputIsInvalid = !subjectValid && subjectWasTouched;

  const subjectInputClasses = subjectInputIsInvalid
    ? `${styles["input-fields--invalid"]}`
    : `${styles["input-fields--valid"]}`;

  const subjectHandler = (e) => {
    setEnteredSubject(e.target.value);
    if (e.target.value.trim() !== "") {
      setSubjectValid(true);
      setSubjectWasTouched(true);
    } else setSubjectValid(false);
    setSubjectWasTouched(true);
  };

  const bodyInputIsInvalid = !bodyValid && bodyWasTouched;

  const bodyInputClasses = bodyInputIsInvalid
    ? `${styles["body-input--invalid"]}`
    : `${styles["body-input--valid"]}`;

  const bodyHandler = (e) => {
    setEnteredBody(e.target.value);
    if (e.target.value.trim() !== "") {
      setBodyValid(true);
      setBodyWasTouched(true);
    } else setBodyValid(false);
    setBodyWasTouched(true);
  };
  const formHandler = (e) => {
    if (!subjectValid || !emailValid || !bodyValid) {
      e.preventDefault();
    } else e.preventDefault();
    setEnteredBody("");
    setFormSubmitted(true);
    console.log(formSubmitted);
  };

  return (
    <>
      <div className={styles["contact-layout"]}>
        <div>
          I can be contacted via e-mail by clicking{" "}
          <a
            className={styles["email-href"]}
            href="mailto:bergren.bergren@yahoo.com"
          >
            here
          </a>{" "}
          or by filling out the form below.
        </div>
        {emailInputIsInvalid && (
          <p className={styles["warning"]}>Email must be valid</p>
        )}
        {subjectInputIsInvalid && (
          <p className={styles["warning"]}>Please enter a subject</p>
        )}
        {bodyInputIsInvalid && (
          <p className={styles["warning"]}>Please don't leave body empty</p>
        )}
        <form className={styles["form-container"]}>
          <label className={styles["hidden-label"]} htmlFor="Email">
            Email
          </label>
          <input
            onBlur={emailHandler}
            onKeyDown={emailInputIsInvalid ? emailHandler : undefined}
            type="email"
            id="Email"
            className={emailInputClasses}
            placeholder={"Your e-mail"}
          />
          <label className={styles["hidden-label"]} htmlFor="Subject"></label>

          <input
            onBlur={subjectHandler}
            onKeyDown={subjectInputIsInvalid ? subjectHandler : undefined}
            type="text"
            id="Subject"
            className={subjectInputClasses}
            placeholder="Subject"
          />
          <label className={styles["hidden-label"]} htmlFor="Body">
            Body
          </label>
          <textarea
            onBlur={bodyHandler}
            onKeyDown={bodyInputIsInvalid ? bodyHandler : undefined}
            id="Body"
            className={bodyInputClasses}
            placeholder="Please write any questions here, and I'll get back to you as soon as I can!"
            rows={6}
          ></textarea>
          <button
            type="submit"
            className={styles["form-button"]}
            size="small"
            variant="outlined"
            onClick={formHandler}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;

// const link =
// "mailto:bergren.bergren@yahoo.com" +
// "&subject=" +
// encodeURIComponent(
//   document.getElementsByClassName("This is my subject")
// ) +
// "&body=" +
// encodeURIComponent(document.getElementById("myText").value);
