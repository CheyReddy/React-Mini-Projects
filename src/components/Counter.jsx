import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Counter.module.css";
// import styled from "styled-components";

// const StyledButton = styled.button`
//   padding: 10px;
//   margin: 5px;
//   background-color: teal;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 15px;
// `;

function Counter() {
  const [count, setCount] = useState(0);
  const [changeByVal, setChangeByVal] = useState(1);
  return (
    <div className={styles.container}>
        <Link className={styles.back} to={-1}>
          Back
        </Link>
      <div className={styles.counter}>
        <h1 className={styles.heading}>Counter: {count}</h1>
        <div>
          <button
            className={styles.button}
            onClick={() => setCount((p) => p + Number(changeByVal))}
          >
            +
          </button>
          <button
            className={styles.button}
            onClick={() => setCount((p) => p - Number(changeByVal))}
          >
            -
          </button>
        </div>
        <div>
          Increment/Decrement by {" : "} 
          <input
            type="text"
            value={changeByVal}
            onChange={(e) => setChangeByVal(e.target.value)}
            width="7px"
          />
        </div>
        <div>
          <button className={styles.button} onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
