import { useState } from "react";

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // STEP HANDLES
  const incrementStep = () => setStep((s) => s + 1);
  const decrementStep = () => setStep((s) => (s > 1 ? s - 1 : 1));
  // COUNT HANDLESf
  const incrementCounter = () => setCount((c) => c + step);
  const decrementCounter = () => setCount((c) => c - step);

  function RenderDate({ counter }) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + counter);
    // DATE RENDER
    const RenderDateString = (count) => {
      return (
        <p className="DATE">
          {count > 0
            ? `${count} days from today is `
            : count < 0
            ? `${Math.abs(count)} days ago was `
            : `Today is `}
          {currentDate.toDateString()}
        </p>
      );
    };
    return RenderDateString(counter);
  }

  return (
    <>
      {/* STEP RENDER */}
      <div className="STEP">
        <div>Step: {step}</div>
        <div className="buttons">
          <button onClick={decrementStep}>-</button>
          <button onClick={incrementStep}>+</button>
        </div>
      </div>
      {/* COUNTER RENDER */}
      <div className="COUNTER">
        <div>Count: {count}</div>
        <div className="buttons">
          <button onClick={decrementCounter}>-</button>
          <button onClick={incrementCounter}>+</button>
        </div>
      </div>

      <RenderDate counter={count} />
    </>
  );
}

function DateCounter() {
  return <Counter />;
}

export default DateCounter;
