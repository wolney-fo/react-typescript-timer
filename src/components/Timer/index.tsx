import { useEffect, useState } from "react"
import './style.css'


const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 30 * 60 // 30 minutes

function Timer() {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS)

  useEffect(() => {
    if (secondsAmount == 0) {
      alert('End')
      return;
    }

    setTimeout(() => {
      setSecondsAmount(state => state - 1);
    }, 1000)
  }, [secondsAmount]);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  return (
    <div className="timer-container">
      <span>{String(minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  )
}

export default Timer
