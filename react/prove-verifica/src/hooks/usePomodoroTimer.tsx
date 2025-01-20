import { useState, useEffect } from "react";

function usePomodoroTimer(initialMinutes = 25) {
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer: number;
        if(isRunning) {
            timer = setInterval(() => {
                if(seconds === 0) {
                    if(minutes === 0) {
                        setIsRunning(false);
                        clearInterval(timer);
                    } else {
                        setMinutes(prevMin => prevMin - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(presSec => presSec - 1);
                }
            }, 1000);
        }
        return  () => clearInterval(timer);
    }, [isRunning, minutes, seconds]);

    return {minutes, seconds, isRunning, setMinutes, setIsRunning, setSeconds};
}

export default usePomodoroTimer;