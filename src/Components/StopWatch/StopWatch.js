import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const [millisecond, setMillisecond] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [toggleStart, setToggleStart] = useState(true);

    useEffect(()=> {
       
        const intervalId = setInterval(() => {
          return !toggleStart && (
            millisecond > 900 ? (
                (seconds == 59 ? (setMinutes((minutes) => minutes + 1 ), setSeconds(0), setMillisecond(0)) : setSeconds((seconds)=> seconds+1), setMillisecond(0)) 
                )
            : setMillisecond((millisecond)=> millisecond+1)
            )
        }, 1);
            return () => {
                clearInterval(intervalId);
            }

    }, [toggleStart, millisecond, seconds, minutes])

    const handleStartStop = () => {
        setToggleStart(!toggleStart);
    }

    const handleReset = () => {
        setToggleStart(false);
        setSeconds(0)
    }

    return (
        <>
            <div>Stop Watch</div>
            <div>{minutes < 10 ? <span>0{minutes}</span> : <span>{minutes}</span>} : {seconds < 10 ? <span>0{seconds}</span> : <span>{seconds}</span>}:{millisecond}</div>
            <button onClick={handleStartStop}>{toggleStart ? "Start" : "Stop"}</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default StopWatch