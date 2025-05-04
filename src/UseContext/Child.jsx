import { useContext } from "react"
import { Context } from "./Context"

const Child =() => {
    const {color ,handleChange} = useContext(Context);
    return (
        <>
            <h1 style={{color : color}}>This is Heading</h1>
            <button onClick={handleChange}>Click here</button>
        </>
    )
};
export default Child;