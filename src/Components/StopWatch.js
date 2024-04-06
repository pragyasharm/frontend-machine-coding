import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const [seconds, setSeconds] = useState(56);
    const [minutes, setMinutes] = useState(0);
    const [toggleStart, setToggleStart] = useState(true);

    useEffect(()=> {
       
        const intervalId = setInterval(() => {
          return !toggleStart && (seconds === 59 ? (setMinutes((minutes)=> minutes+1), setSeconds(0)): setSeconds((seconds)=> seconds+1) )
        }, 1000);
    

            return () => {
                clearInterval(intervalId);
            }

    }, [toggleStart, seconds, minutes])

    const handleStartStop = () => {
        setToggleStart(!toggleStart);
    }

    const handleReset = () => {
        setToggleStart(false);
        setSeconds(56)
    }

    return (
        <>
            <div>Stop Watch</div>
            <div>{minutes < 10 ? <span>0{minutes}</span> : <span>{minutes}</span>} : {seconds < 10 ? <span>0{seconds}</span> : <span>{seconds}</span>}</div>
            <button onClick={handleStartStop}>{toggleStart ? "Start" : "Stop"}</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default StopWatch