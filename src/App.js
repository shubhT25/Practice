import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Show from './components/Show';

var names = ['Shubham']

function App() {
  return (
    <>
      <h1>Welcome to React, {names}</h1>
      <Button variant='success'>Submit</Button>
      <Show />
    </>
  );
}

export default App;
