import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";
import Counter from "./Counter";
import { CounterState } from "./Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <h1>Get started</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
        </p>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <section id="center">
        <Counter />
        <CounterState />
      </section>
    </>
  );
}

export default App;
