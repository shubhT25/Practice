import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Show from './components/Show';
import Timer from './components/Timer';
import ProgressBar from './components/ProgressBar';
import { useState } from "react";

var names = ['Shubham'];
function App() {
  const [percent, setPercent] = useState(0);
  return (
    <>
      <h1>Welcome to React, {names}</h1>
      <Button variant='success'>Submit</Button>
      <Show />
      <Timer />
      <ProgressBar width={percent}/>
      <form>
        <label for="html">Input Percentage</label>
        <input id="percent" type="number" onChange={(e) => setPercent(e.target.value)}></input>
      </form>
    </>
  );
}

export default App;
