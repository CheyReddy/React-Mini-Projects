import React, { useState } from "react";
import styles from "../css/StringTransformers.module.css";
import { Link } from "react-router-dom";

function StringTransformers() {
  const [text, setText] = useState("");
  let temp = "";
  let strings = [];
  let newStr = "";

  const handleClick = (e, value) => {
    switch (value) {
      case 1:
        temp = e.target.value.toLowerCase();
        setText(temp);
        break;
      case 2:
        temp = e.target.value.toUpperCase();
        setText(temp);
        break;
      case 3:
        strings = e.target.value.split(" ");
        newStr = strings[0];
        for (let i = 1; i < strings.length; i++) {
          newStr +=
            strings[i].charAt(0).toUpperCase() + strings[i].substring(1);
        }
        setText(newStr);
        break;
      case 4:
        strings = e.target.value.split(" ");
        for (let i = 0; i < strings.length; i++) {
          newStr +=
            strings[i].charAt(0).toUpperCase() + strings[i].substring(1);
        }
        setText(newStr);
        break;
      default:
        break;
    }
  };
  return (
    <div className={styles.container}>
      <Link className={styles.back} to={-1}>
        Back
      </Link>
      <h1 className={styles.heading}>String Transformers</h1>
      <div className={styles.transformer}>
        <div className={`${styles.full}`}>
          <textarea className={styles.textArea} rows={4} value={text} />
        </div>
        <div className={styles.buttons}>
          <div className={`${styles.btn}`}>
            <button className={styles.myButton} onClick={handleClick(event, 1)}>
              Lower Case
            </button>
          </div>
          <div className={styles.btn}>
            <button className={styles.myButton} onClick={handleClick(2)}>
              Upper Case
            </button>
          </div>
          <div className={styles.btn}>
            <button className={styles.myButton} onClick={handleClick(3)}>
              Camel Case
            </button>
          </div>
          <div className={styles.btn}>
            <button className={styles.myButton} onClick={handleClick(4)}>
              Pascal Case
            </button>
          </div>
          <div className={styles.btn}>
            <button className={styles.myButton} onClick={handleClick(5)}>
              Snake Case
            </button>
          </div>
          <div className={styles.btn}>
            <button className={styles.myButton} onClick={handleClick(6)}>
              Kebab Case
            </button>
          </div>
          <div className={styles.btn}>
            <button className={styles.myButton} onClick={handleClick(7)}>
              Trim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StringTransformers;
