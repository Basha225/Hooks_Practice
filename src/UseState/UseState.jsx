import { useState } from "react";

const UseState = () => {
    const [isLoggin , setLogin] =useState(false);
    const handleLogin = () => {
        setLogin(!isLoggin);
    }
    return (
        <>
            <div>
                <h1>Your Are {isLoggin ? "Login" : "Logout"}</h1>
                <button onClick={handleLogin}>{isLoggin ? "Login" : "Logout"}</button>
            </div>
        </>
    )
};
export default UseState;