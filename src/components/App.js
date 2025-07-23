import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div id="main">
      // Do not alter the main div
      <button id="click"  onClick={() => setToggle(!toggle)}>Click Me</button>
      <p id="para" style={{display: toggle ? 'block' : 'none'}}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>
    </div>
  );
}


export default App;
