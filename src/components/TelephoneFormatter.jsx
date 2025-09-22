import React, { useState } from "react";
import styles from "../css/TelephoneFormatter.module.css";
import { Link } from "react-router-dom";

function TelephoneFormatter() {
  const [number, setNumber] = useState("");
  const [anotherTemp, setAnotherTemp] = useState(0);

  //   const formatPhone = (e) => {
  //     if (e.target.value.length === 3) {
  //       const temp =
  //         `+(${e.target.value.substring(0, 3)}) - ` + e.target.value.substring(3);
  //       const temp2 = e.target.value.substring(0, 3);
  //       setAnotherTemp(temp2);
  //       setNumber(temp);
  //     } else if (e.target.value.length === 9) {
  //       setNumber(anotherTemp);
  //     } else {
  //       setNumber(e.target.value);
  //     }
  //   };

  const formatPhone = (e) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    let formatted = onlyNums;
    if (onlyNums.length <= 3) {
      formatted = `${onlyNums}`;
    } else if (onlyNums.length <= 10) {
      formatted = `+(${onlyNums.substring(0, 3)}) - ${onlyNums.substring(3)}`;
    }
    setNumber(formatted);
  };

  return (
    <div className={styles.container}>
      <Link className={styles.back} to={-1}>
        Back
      </Link>
      <div className={styles.heading}>
        <h1>Telephone Formatter</h1>
      </div>
      <div className={styles.inputField}>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="Mobile number"
          maxLength="16"
          value={number}
          onChange={formatPhone}
        />
      </div>
      <div className={styles.para}>
        <p>+(123) - 4567890</p>
      </div>
    </div>
  );
}

export default TelephoneFormatter;
