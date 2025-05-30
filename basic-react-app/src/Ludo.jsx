import { useState } from "react";
function Ludo() {
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);

    function redIncrease() {
        setCount(count => count + 1);
    }
      function yellowIncrease() {
        setCount1(count1 => count1 + 1);
    }
      function pinkIncrease() {
        setCount2(count2 => count2 + 1);
    }
      function greyIncrease() {
        setCount3(count3 => count3 + 1);
    }
    return (
        <div>
            <p> <b>Red : {count}</b></p>
            <button onClick={redIncrease} style={{ backgroundColor: "red", height: "50px", width: "80px" }}>Red</button>
            <p> <b>Yellow : {count1}</b></p>
            <button onClick={yellowIncrease} style={{ backgroundColor: "yellow", height: "50px", width: "80px" }}>Yellow</button>
            <p> <b>Pink : {count2}</b></p>
            <button onClick={pinkIncrease} style={{ backgroundColor: "pink", height: "50px", width: "80px" }}>Pink</button>
            <p> <b>Grey : {count3}</b></p>
            <button onClick={greyIncrease} style={{ backgroundColor: "grey", height: "50px", width: "80px" }}>Grey</button>

        </div>
    );
}
export default Ludo;