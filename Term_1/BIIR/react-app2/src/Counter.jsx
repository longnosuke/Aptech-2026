export default function Counter() {
  let count = 0;

  function handleClick(event) {
    count++;
    event.target.textContent = `${count} times`;
  }

  return (
    <div>
      <h2>Demo Counter</h2>
      <button className="counter" onClick={handleClick}>
        Clickme: {count} times
      </button>
    </div>
  );
}

import { useState } from "react";
export function CounterState() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Demo Counter with useState</h2>
      <button className="counter" onClick={() => setCount(count + 1)}>
        +
      </button>
      <span className="counter">Count: {count}</span>
      <button className="counter" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  );
}
