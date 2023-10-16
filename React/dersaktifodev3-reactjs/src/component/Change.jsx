import React, { useState } from 'react'

function Change() {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);

    const change = () => {
        setWidth(parseInt(width));
        setHeight(parseInt(height));
    };


    return (<>

        <div>
            <label htmlFor="">Width: </label>
            <input type='text' onChange={(w) => setWidth(w.target.value)} />
            <label htmlFor="">Height: </label>
            <input type='text' onChange={(h) => setHeight(h.target.value)} />
        </div>
        <div>
            <button onClick={() => change()}>Add</button>
        </div>

        <div style={{ border: "1px solid", width: width, height: height }}>
        </div>
    </>)
}

export default Change