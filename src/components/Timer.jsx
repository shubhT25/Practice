import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    clearInterval(window.startTimer);
  }, [timer]);

  const start = () => {
    window.startTimer = setInterval(() => {
      setTimer(timer => timer + 1);
      console.log(timer)
    }, 1000);
  };

  const stop = () => {
    clearInterval(window.startTimer);
  }

  const reset = () => {
    clearInterval(window.startTimer);
    setTimer(0);
  }

  return (
    <div>
      <h1>Timer</h1>
      <p>
        {Math.floor(timer / 60)} mins {timer % 60} seconds
      </p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
