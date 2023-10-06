import { useState } from 'react'
import './App.css'

function App() {
  const [breakLength, setBreakLengeth] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [time, setTime] = useState(25*60);
  const [isPlaying, setIsPlaying] = useState(false);


  let timeInM = time/60;
  let timeInS = time%60;
  if (timeInM < 10) {
    timeInM = "0" + timeInM
  }
  if (timeInS < 10) {
    timeInS = "0" + timeInS
  }
  const handleplay = (e) => {
    e.preventDefault();
    if(isPlaying === false) {
      setIsPlaying(true);
      setTime(time-1);//new
    } else setIsPlaying(false);
  }
 
  const handleReset = (e) => {
    e.preventDefault();
    setBreakLengeth(5);
    setSessionLength(25);
    setTime(25*60);
    setIsPlaying(false);
  }
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
    <h2 id="time-left">{timeInM}:{timeInS}</h2>
    <button id="start_stop" onClick={handleplay} >{isPlaying ? "Pause" : "Play"}</button>
    <button id="reset" onClick={handleReset}>Reset</button>

    </>
  )
}

export default App
