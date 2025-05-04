import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const [isStart ,setTimer] = useState(false);
    const [count , setCount] = useState(0);
    const inputRef = {
        current : null
    }
   const handleFocus= () => {
       inputRef.current.focus();
   }
   const videoRef = useRef(null);
   const handlePlay = () => {
    videoRef.current.play();
   }
   const handlePause = () => {
    videoRef.current.pause();
   }


const handleStart = () => {
    setTimer(true)
}
const handleStop = () => {
    setTimer(false)
}
const handleReset = () => {
    setTimer(false)
    setCount(0)
}
   const timerRef = useRef(null);
   useEffect(() => {
    if(isStart){
        timerRef.current = setInterval(() => {
            setCount((prev) => prev + 1)
        } ,1000)
    }
    return () => clearInterval(timerRef.current)
   },[isStart])
    return (
        <>
            <input type="text" ref={inputRef}/>
            <p>Click focus button to focus the input</p>
            <button onClick={handleFocus}>Focus</button>
            <br />

            <video src="https://www.w3schools.com/html/mov_bbb.mp4" width="320" height="240" controls ref={videoRef} muted>
            </video>
            <br />
            <button onClick={handlePlay}>play</button>
            <button onClick={handlePause}>pause</button>
            <br />
            <h1>Timer :{count}</h1>
            <button onClick={handleStart}>start</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleStop}>stop</button>
        </>
    )
};
export default UseRef;