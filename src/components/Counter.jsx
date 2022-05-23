import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const decrement = () => {
    if (counter <= 0) {
      return;
    }
    setCounter((prevCount) => prevCount - 1);
  };

  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <div>
        <h1>Counter</h1>
      </div>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export { Counter };
