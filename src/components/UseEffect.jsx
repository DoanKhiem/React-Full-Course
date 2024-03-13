import React, { useState, useEffect } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        document.title = `Count ${count} ${color}`;

        window.addEventListener("resize", handleResize);

        return () => {
            //some clean up code
            window.removeEventListener("resize", handleResize);
            console.log('clean up');
        }
    }, [count, color])

    function addCount() {
        setCount(c => c + 1);
    }
    function subtractCount() {
        setCount(c => c - 1);
    }
    function changeColor() {
        setColor(c => c === "green" ? "red" : "green");
    }

    function handleResize () {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change color</button>

            <br />
            <p>window width: {width}px</p>
            <p>window height: {height}px</p>
        </>
    )
}
export default UseEffect;