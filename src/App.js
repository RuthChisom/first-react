// import logo from './logo.svg';
import './App.css';

import FComp from './Components/FunctionalComp'; //I renamed the function here, that's allowed
import ClassComp from './Components/ClassComp';

function App() {
  return (
    // multiple html tags MUST be enclosed in a div tag
    <div>
      <h1>Hello! I'm Ruth Chisom.</h1>
      <h1>I'm an Angular Developer, learning React.</h1>
      <FComp/>
      <ClassComp/>
    </div>
    )
}

export default App;
