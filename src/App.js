import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Show from './components/Show';
import Timer from './components/Timer';

var names = ['Shubham']

function App() {
  return (
    <>
      <h1>Welcome to React, {names}</h1>
      <Button variant='success'>Submit</Button>
      <Show />
      <Timer />
    </>
  );
}

export default App;
