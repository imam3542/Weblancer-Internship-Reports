import { useState, useRef } from "react";

function Stopwatch() {
  const [val, setVal] = useState(0);
  const ref = useRef(null);

  function start() {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setVal((p) => p + 1);
      }, 1000);
    }
  }

  function stop() {
    clearInterval(ref.current);
    ref.current = null;
  }

  function reset() {
    stop();
    setVal(0);
  }

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>{val}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
