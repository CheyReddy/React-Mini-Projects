import React from "react";
import styles from '../css/Container.module.css'
import { Link } from "react-router-dom";
import Counter from "./Counter";

function Container() {
  return (
    <div className={`${styles.container} ${styles.wrapper}`}>
      <div><Link to='/counter' className={styles.link}>Counter</Link></div>
      <div><Link to='/image-gallery' className={styles.link}>Image Gallery</Link></div>
      <div><Link to='/accordion' className={styles.link}>Accordion</Link></div>
      <div><Link to='/random-number-generator' className={styles.link}>Random Number Generator</Link></div>
      <div><Link to='/telephone-formatter' className={styles.link}>Telephone Formatter</Link></div>
      <div><Link to='/string-transformers' className={styles.link}>String Transformers</Link></div>
    </div>
  );
}

export default Container;
