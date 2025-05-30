import { useState, useEffect } from "react";
function Counter() {
    const [count, setCount] = useState(0);

    useEffect(function () {
        let clock = setInterval(function () {
            setCount(c => c + 1)
        }, 1000);
        return function () {
            clearInterval(clock);  //dependency array,cleanup, fetch inside the useEffect
        }
    }, []);

    function increaseCount() {
        setCount(count + 1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increaseCount}>Increase count</button>

        </>
    )
}
export default Counter;