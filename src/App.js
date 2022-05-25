// import logo from './logo.svg';
import './App.css';

import FComp from './Components/FunctionalComp'; //I renamed the function here, that's allowed
import {ClassComp, ClassComp1} from './Components/ClassComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    // multiple html tags MUST be enclosed in a div tag
    <div>
      <h1>Hello! I'm Ruth Chisom.</h1>
      <h1>I'm an Angular Developer, learning React.</h1>
      <FComp/>
      <ClassComp/>
      <ClassComp1/>
      <Click/>
      <Counter/>
      <ParentComp/>
    </div>
    )
}

export default App;
