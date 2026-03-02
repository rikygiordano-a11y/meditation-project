import { useEffect, useRef, useState } from "react";

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function Timer() {
  const [minutes, setMinutes] = useState(5);         // impostabile dall’utente
  const [secondsLeft, setSecondsLeft] = useState(5 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef(null);

  // ogni volta che cambi i minuti, resettiamo il timer
  useEffect(() => {
    setSecondsLeft(minutes * 60);
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, [minutes]);

  // gestione del countdown
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  function start() {
    if (secondsLeft > 0) setIsRunning(true);
  }

  function pause() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setSecondsLeft(minutes * 60);
  }

  const finished = secondsLeft === 0;

  return (
    <div className="timerBox">
      <div className={`time ${finished ? "done" : ""}`}>
        {formatTime(secondsLeft)}
      </div>

      <label className="label">
        Durata (minuti)
        <input
          type="number"
          min="1"
          max="60"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
        />
      </label>

      <div className="buttons">
        {!isRunning ? (
          <button onClick={start} disabled={finished}>
            ▶ Start / Riprendi
          </button>
        ) : (
          <button onClick={pause}>⏸ Pausa</button>
        )}
        <button className="ghost" onClick={reset}>
          🔁 Reset
        </button>
      </div>

      {finished && (
        <p className="finishMsg">✅ Sessione completata! Respira profondamente.</p>
      )}
    </div>
  );
}