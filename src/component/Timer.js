import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [timer, setTimer] = useState(new Date());
  const updateTime = () => {
    setTimer(new Date());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="timer">
      <h1>{timer.toLocaleTimeString()}</h1>
      <h1>{timer.toLocaleTimeString().slice(5, 7)}</h1>
    </div>
  );
}

export default Timer;
