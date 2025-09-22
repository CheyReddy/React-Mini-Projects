import React, { useState } from "react";
import styles from "../css/Accordion.module.css";
import { Link } from "react-router-dom";

function Accordion() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index], 
    }));
  };

  const questions = [
    {
      q: "Do I have to allow the use of cookies?",
      a: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      q: "How do I change my My Page password?",
      a: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      q: "What is BankID?",
      a: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      q: "Whose birth number can I use?",
      a: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
    },
    {
      q: "When do I receive a password ordered by letter?",
      a: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan",
    },
  ];

  return (
    <div className={styles.container}>
      <Link className={styles.back} to={-1}>Back</Link>    
      <p id={styles.head}>Accordion</p>
      <p className={styles.heading}>Is multiple open accordion allowed?</p>
      <div className={styles.accordion}>
        {questions.map((item, index) => (
          <div key={index} className={styles.quesNum}>
            <p className={styles.questionText}>
              {item.q}
              <span>
                <button
                  onClick={() => toggleAccordion(index)}
                  className={styles.myButton}
                >
                  {openIndexes[index] ? "-" : "+"}
                </button>
              </span>
            </p>
            {openIndexes[index] && (
              <p className={styles.answerText}>{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
