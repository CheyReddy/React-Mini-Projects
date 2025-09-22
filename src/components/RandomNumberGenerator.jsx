import React, { useState } from "react";
import styles from "../css/RandomNumberGenerator.module.css";
import { Link } from "react-router-dom";

function RandomNumberGenerator() {
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState("");
  const [randNum, setRandNum] = useState(0);
  const randomNumber = () => {
    const newNum = Math.floor(Math.random() * 100) + 1;
    setRandNum(newNum);
    console.log(newNum);
  };
  const handleClick = () => {
    if (number === randNum) {
      setMessage("Hurray..! You found the actual number");
    } else if (number < randNum) {
      setMessage("Your guess is Less than the actual number");
    } else if (number > randNum) {
      setMessage("Your guess is Higher than the actual number");
    }
  };
  return (
    <div className={styles.container}>
      <Link className={styles.back} to={-1}>
        Back
      </Link>
      <div className={styles.randNumber}>
        <div className={styles.heading}>
          <p>Random Number Generator</p>
        </div>
        <div className={styles.para}>
          <p>Guess a number between 1 to 100</p>
        </div>
        <div>
          <span className={styles.subHead}>First Click Generate</span>
          <button onClick={randomNumber} className={styles.myButton}>
            Generate
          </button>
        </div>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(Number(e.target.value));
            setMessage("");
          }}
          min={1}
          max={100}
        />
        <div>
          <button onClick={handleClick} className={styles.myButton}>
            Check
          </button>
          <button
            onClick={() => {
              setNumber(0);
              setMessage("");
              setRandNum(0);
            }}
            className={styles.myButton}
          >
            Reset
          </button>
        </div>
        <div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomNumberGenerator;
