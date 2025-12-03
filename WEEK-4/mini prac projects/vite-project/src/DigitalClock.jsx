import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Digital Clock</h2>
      <p>{time}</p>
    </div>
  );
}

export default DigitalClock;
