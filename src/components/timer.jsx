import useTimer from "../hooks/useTimer";

function Timer() {
  const { isRunning, startTimer, pauseTimer, resetTimer, formatTime } =
    useTimer(300);

  return (
    <div className="timer-box">
      <h2>{formatTime()}</h2>

      <div className="timer-buttons">
        {!isRunning ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={pauseTimer}>Pause</button>
        )}

        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;