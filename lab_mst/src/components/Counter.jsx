import { useState } from "react";
import Button from "./Button";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1); // this allows negative numbers
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1 className="title">Counter Application</h1>

      <div className="count">{count}</div>

      <div className="button-group">
        <Button label="Increment" onClick={increment} className="increment" />
        <Button label="Decrement" onClick={decrement} className="decrement" />
        <Button label="Reset" onClick={reset} className="reset" />
      </div>
    </div>
  );
}

export default Counter;