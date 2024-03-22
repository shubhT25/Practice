import React, { useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [timeInterval, setTimeInterval] = useState(null);

  const start = () => {
    console.log(toggle)
    if(toggle === true) {
      setToggle(false);
      setTimeInterval(
        setInterval(() => {
        setTimer(timer => timer + 1);
        console.log(timer)
      }, 1000)
      );
    }
  };

  const stop = () => {
    if(toggle === false) {
      clearInterval(timeInterval);
      setToggle(true)
    }
  }

  const reset = () => {
    clearInterval(timeInterval);
    setTimer(0);
    setToggle(true);
  }

  return (
    <div>
      <h3 style={{marginTop: '10px'}}>Timer</h3>
      <p>
        {Math.floor(timer / 60)} mins {timer % 60} seconds
      </p>
      <button onClick={start} className="start">Start</button>
      <button onClick={stop} className="stop">Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
