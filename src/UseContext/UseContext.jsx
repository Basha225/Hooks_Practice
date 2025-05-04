import { useState } from "react"
import { Context } from "./Context";
import Child from "./Child";

const UseContext = () => {
    const [color , setColor] = useState('blue');
    const handleChange = () => {
        setColor('yellow')
    }
    return (
        <>
            <Context.Provider value={{color,handleChange}}>
                <Child />
            </Context.Provider>
        </>
    )
};

export default UseContext;