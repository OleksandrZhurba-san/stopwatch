import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function StopWatch() {
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCurrentTime((prev) => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
    return () => clearInterval(interval);
  }, [isRunning, currentTime]);

  function handleStart() {
    setIsRunning(true);
  }
  function handleStop() {
    setIsRunning(false);
  }
  function handleReset() {
    setCurrentTime(0);
  }

  return (
    <div className={styles.stop_watch_wrapper}>
      <h1>{currentTime}</h1>
      <div className={styles.button_wrapper}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
