import React, { useState } from 'react'

const StopWatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [toggleStart, setToggleStart] = useState(true);

    const [intervalval, setIntervalval] = useState()

    const handleStartStop = () => {
        
        setToggleStart(!toggleStart);
        if(!toggleStart) {
            clearInterval(intervalval);       
        } else {
        const intervalId = setInterval(() => {
           {/* setMinutes((minutes) => Math.floor((seconds+1)/60)) */}
            setSeconds((seconds) => seconds + 1)
        }, 1000);
        setIntervalval(intervalId);
    }
    }

    const handleReset = () => {
        clearInterval(intervalval);
        setToggleStart(false);
        setSeconds(0)
    }

    return (
        <>
            <div>Stop Watch</div>
            <div>{minutes < 10 ? <><span>0{minutes}</span></> : <><span>{minutes}</span></>} : {seconds < 10 ? <><span>0{seconds}</span></> : <><span>{seconds}</span></>}</div>
            <button onClick={handleStartStop}>{toggleStart ? <>Start</> : <>Stop</>}</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default StopWatch