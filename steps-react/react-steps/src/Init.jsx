
// TODO:

// will have an increment function which when the next button is clicked the state counter increases by 1 
// however within that function will have a condition that if the count value = array.length 
// we will reset the counter that way we dont display something undefined

// Will also create a decrement function which does the oppoisite also having a condition to check wether array.length is = 0 and the count is = 0 then reset

// Will also have a reset function to reset the count variable in case any of the extremes of the questions hvae been reeached like the last question and the first question etc

// will create two buttons next and back 
    // the next button will take the increment function as an onclick function
    // the back button will take the decrement functon as an onclick function


import React, {useState} from 'react';

const questions = [
  {
    "question": "A flashing red traffic light signifies that a driver should do what?",
    "A": "stop",
    "B": "speed up",
    "C": "proceed with caution",
    "D": "honk the horn",
    "answer": "A"
  }, {
    "question": "A knish is traditionally stuffed with what filling?",
    "A": "potato",
    "B": "creamed corn",
    "C": "lemon custard",
    "D": "raspberry jelly",
    "answer": "A"
  }, {
    "question": "A pita is a type of what?",
    "A": "fresh fruit",
    "B": "flat bread",
    "C": "French tart",
    "D": "friend bean dip",
    "answer": "B"
  }, {
    "question": "A portrait that comically exaggerates a person's physical traits is called a what?",
    "A": "landscape",
    "B": "caricature",
    "C": "still life",
    "D": "Impressionism",
    "answer": "B"
  }, {
    "question": "A second-year college student is usually called a what?",
    "A": "sophomore",
    "B": "senior",
    "C": "freshman ",
    "D": "junior ",
    "answer": "A"
  }, {
    "question": "A student who earns a J.D. can begin his or her career as a what?",
    "A": "lawyer",
    "B": "bricklayer",
    "C": "doctor",
    "D": "accountant",
    "answer": "A"
  },
];

function RenderQuestion ({counter}) {
return (
  <div className='question__content'>
 <h3 className='question__content-title'>Question {counter + 1}</h3> 
 <p className='question__content-question'>{questions[counter].question}</p>
  </div>
 
 );
}
function Quiz() {
  const [count,setCount] = useState(0);
  const upperLimit = questions.length - 1;
  const lowerLimit = 0;
// increment function

const increment = () => {
  if(count === upperLimit) {
    return;
  };
  setCount(count + 1)
};

// decrement function

const decrement = () => {
  if(count === lowerLimit) {
    reset()
    return;
  };
  setCount(count - 1)

};

// reset function

const reset = () => setCount(0);

return (
<div className='question__container'>

<RenderQuestion counter={count}/>
<div className="buttons">

<button className={`primary__btn ${count === lowerLimit ? 'btn__disabled' : ""}`} onClick={decrement}>Back</button>
<button className={`primary__btn ${count === upperLimit ? 'btn__disabled' : ""}`} onClick={increment}>Next Question</button>
</div>
</div>)
}

export default Quiz;