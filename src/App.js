import React, { useEffect } from "react";
import "./App.css";
import Timer from "./component/Timer";
import gsap from "gsap";

function App() {
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".app", { duration: 1, width: "0%", opacity: 0 })
      .from(".card", {
        duration: 2,
        x: "200px",
        opacity: 0,
      })
      .from(
        ".gsap_ani",
        {
          duration: 1,
          y: "-300px",
          opacity: 0,
          stagger: 0.8,
          ease: "bounce.out(1, 0.3)",
        },
        "-=2"
      );
  }, []);

  return (
    <div className="app">
      <Timer />
    </div>
  );
}

export default App;
