import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Show from './components/Show';
import Timer from './components/Timer';
import ProgressBar from './components/ProgressBar';
import { useState } from "react";
import ClickBait from './components/ClickBait';

var names = ['Shubham'];
function App() {
  const [percent, setPercent] = useState(0);
  return (
    <>
      <h1>Welcome to React, {names}</h1>
      <br/>
      <Show />
      <br/>
      <Timer />
      <br/>
      <ProgressBar width={percent}/>
      <form>
        <label for="html">Input Percentage</label>
        <input id="percent" type="number" onChange={(e) => setPercent(e.target.value)}></input>
      </form>
      <br/>
      <ClickBait/>
    </>
  );
}

export default App;
