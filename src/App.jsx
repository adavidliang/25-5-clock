import { useState } from 'react'
import './App.css'

function App() {
  const [breakLength, setBreakLengeth] = useState(5);
  const [sessionLength, setSessionLength] =useState(25);
  const [count, setCount] = useState(5);

  return (
    <>
    <lable id="break-label">Break Length</lable>
    <lable id="session-label">Session Length</lable>
    <button id="break-decrement" >-</button>
    <button id="session-decrement">-</button>
    <button id="break-increment" >+</button>
    <button id="session-increment">+</button>
    <h2 id="break-length">{breakLength}</h2>
    <h2 id="session-length">{sessionLength}</h2>
    <lable id="timer-label">Session</lable>

    </>
  )
}

export default App
