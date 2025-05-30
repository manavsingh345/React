import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const inputRef = useRef();
  // function focusOnInput() {
  //   inputRef.current.focus();  //same as->document.getElementById("name"); if first input is id=name;
  const [currentCount, setCurrentCount] = useState(1);
  const timer = useRef();
  function startClock() {
    let value=setInterval(function () {
      setCurrentCount(c => c + 1)
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    clearInterval(timer.current );
  }

  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Stop</button>
      {/* Sign up
      <input ref={inputRef} type={"text"} />
      <input type={"text"} />
      <button onClick={focusOnInput}>Submit</button> */}
    </div>
  )
}

export default App
