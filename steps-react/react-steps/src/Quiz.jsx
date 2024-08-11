// TODO:

// Create me a State on the radio button to be upadte once the onChange and once the question is submitted to check wether the user got the answer correct or not

import React, { useState } from "react";

const questions = [
  {
    question:
      "A flashing red traffic light signifies that a driver should do what?",
    options: [
      {
        A: "stop",
      },
      {
        B: "speed up",
      },
      {
        C: "proceed with caution",
      },

      {
        D: "honk the horn",
      },
    ],
    answer: "A",
  },
  {
    question:
      "A sick red traffic light signifies that a driver should do what?",
    options: [
      {
        A: "stop",
      },
      {
        B: "speed up",
      },
      {
        C: "proceed with caution",
      },

      {
        D: "blah the horn",
      },
    ],
    answer: "A",
  },
  {
    question: "A pita is a type of what?",
    A: "fresh fruit",
    B: "flat bread",
    C: "French tart",
    D: "friend bean dip",
    answer: "B",
  },
  {
    question:
      "A portrait that comically exaggerates a person's physical traits is called a what?",
    A: "landscape",
    B: "caricature",
    C: "still life",
    D: "Impressionism",
    answer: "B",
  },
  {
    question: "A second-year college student is usually called a what?",
    A: "sophomore",
    B: "senior",
    C: "freshman ",
    D: "junior ",
    answer: "A",
  },
  {
    question:
      "A student who earns a J.D. can begin his or her career as a what?",
    A: "lawyer",
    B: "bricklayer",
    C: "doctor",
    D: "accountant",
    answer: "A",
  },
  {
    question:
      "A student who earns a J.D. can begin his or her career as a what?",
    A: "lawyer",
    B: "bricklayer",
    C: "doctor",
    D: "accountant",
    answer: "A",
  },
];

function RenderOptions({ counter }) {
  return questions[0].options.map((option, idx) => {
    const optionKey = Object.keys(option)[0];
    const optionValue = Object.values(option)[0];

    return (
      <div className="option__content" key={optionKey}>
        <input type="radio" name="option" id={optionValue} />
        <label htmlFor={optionValue} className="option__content-key">
          {optionKey}
        </label>
        <p className="option__content-answer">{optionValue}</p>
      </div>
    );
  });
}

function RenderQuestion({ counter }) {
  return (
    <div className="question__content">
      <h3 className="question__content-title">Question {counter + 1}</h3>
      <p className="question__content-question">
        {questions[counter].question}
      </p>
    </div>
  );
}

const ControlButtons = ({ count, lowerLimit, upperLimit, setCount }) => {
  // increment function
  const increment = () => {
    if (count === upperLimit) return;
    setCount(count + 1);
  };

  // decrement function

  const decrement = () => {
    if (count === lowerLimit) return;
    setCount(count - 1);
  };
  return (
    <div className="buttons">
      <button
        className={`primary__btn ${
          count === lowerLimit ? "btn__disabled" : ""
        }`}
        onClick={decrement}
      >
        Back
      </button>
      <button
        className={`primary__btn ${
          count === upperLimit ? "btn__disabled" : ""
        }`}
        onClick={increment}
      >
        Next Question
      </button>
    </div>
  );
};

function Quiz() {
  const [count, setCount] = useState(0);
  const upperLimit = questions.length - 1;
  const lowerLimit = 0;

  return (
    <div className="question__container">
      <h1 className="heading">Quiz React Component</h1>
      <RenderQuestion counter={count} />
      <RenderOptions counter={count} />
      <ControlButtons
        count={count}
        lowerLimit={lowerLimit}
        upperLimit={upperLimit}
        setCount={setCount}
      />
    </div>
  );
}

export default Quiz;
