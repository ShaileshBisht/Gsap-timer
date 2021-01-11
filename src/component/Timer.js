import React, { useState, useEffect } from "react";
import "./Timer.css";
import Tilt from "react-vanilla-tilt";
import Card from "card-vibes";

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
    <Card
      className="card"
      style={{ width: "40%", backdropFilter: "blur(8px)", height: "300px" }}
    >
      <div className="timer">
        <div className="timer_left">
          <h1 className="left_hour">
            {timer.toLocaleTimeString().slice(0, 1)}
          </h1>
          <h1 className="left_minutes">
            {timer.toLocaleTimeString().slice(2, 4)}
          </h1>
        </div>
        <div className="timer_right">
          <h1 className="right_sec">
            {timer.toLocaleTimeString().slice(5, 7)}
          </h1>
          <h1 className="right_amPm">
            {timer.toLocaleTimeString().slice(8, 11)}
          </h1>
        </div>
      </div>
    </Card>
  );
}

export default Timer;
