import React, { useState } from 'react'

function StateRandomColor() {

    const [color, setColor] = useState("gray")

    var colors = ["gray", "red", "green", "yellow", "white", "black", "purple", "pink", "aqua"]

    const changeColor = () => {
        var randomColor = Math.floor(Math.random() * colors.length)

        setColor(colors[randomColor])
    }

    return (<>
        <button onClick={() => changeColor()}>Color</button>
        <div style={{ width: 200, height: 200, backgroundColor: color }}>
        </div>
    </>)
}

export default StateRandomColor