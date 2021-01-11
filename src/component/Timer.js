import React, { useState, useEffect } from "react";
import "./Timer.css";
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
      style={{
        width: "40%",
        backdropFilter: "blur(11px)",
        height: "350px",
        border: "1px solid white",
        borderRadius: "20px",
      }}
    >
      <div className="timer">
        <div className="timer_left">
          <h1 className="left_hour gsap_ani">
            {timer.toLocaleTimeString().slice(0, 1)}
          </h1>
          <h1 className="left_minutes gsap_ani">
            {timer.toLocaleTimeString().slice(2, 4)}
          </h1>
        </div>
        <div className="timer_right">
          <h1 className="right_sec gsap_ani">
            {timer.toLocaleTimeString().slice(5, 7)}
          </h1>
          <h1 className="right_amPm gsap_ani">
            {timer.toLocaleTimeString().slice(8, 11)}
          </h1>
        </div>
      </div>
      <h1 className="date">{timer.toLocaleDateString()}</h1>
    </Card>
  );
}

export default Timer;
