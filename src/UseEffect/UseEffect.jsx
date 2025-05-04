import { useEffect, useState } from "react"

const UseEffect = () => {
    const [count , setCount] = useState(0);
    const [isStart , setStart] = useState(false);
    const handleStart = () =>{
        setStart(true);
    }
    const handleStop = () =>{
        setStart(false);
    }

    const handleReset = () => {
        setStart(false);
        setCount(0);
    }
    useEffect(() => {
        if(isStart){
            const id =setInterval(() => {
                setCount((prev) => prev +1);
            },1000)
            return (() => clearInterval(id))
        }

    },[isStart])
    return (
        <>
        <h1>Count :{count}</h1>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
        </>
    )
}

export default UseEffect;