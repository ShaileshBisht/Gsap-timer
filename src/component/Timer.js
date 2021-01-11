import React, { useState } from "react";
import "./Timer.css";

function Timer() {
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [sec, setSec] = useState(date.getSeconds());

  console.log(hour);
  console.log(minutes);
  console.log(sec);

  return (
    <div className="timer">
      <h1>hello</h1>
    </div>
  );
}

export default Timer;
