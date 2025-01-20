import React from "react";
import usePomodoroTimer from "../../hooks/usePomodoroTimer";

function PomodoroApp() {
    const {minutes, seconds, isRunning, setMinutes, setIsRunning, setSeconds} = usePomodoroTimer();

    return (
        <div>
            <h2>Pomodoro Timer</h2>
            <p>Timer left: {minutes} : {seconds.toString().padStart(2, '0')}</p>
            <button onClick={() => {setIsRunning(!isRunning)}}> {isRunning ? 'Pause' : 'Start'} </button>
            <button onClick={() => {setMinutes(25); setSeconds(0)}}>Reset</button>
        </div>
    )
}

export default PomodoroApp;
