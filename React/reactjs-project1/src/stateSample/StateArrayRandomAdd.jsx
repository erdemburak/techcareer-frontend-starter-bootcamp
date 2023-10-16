import React, { useState } from 'react'

function StateArrayRandomAdd() {
    const [randomNumbers, setRandomNumbers] = useState([23, 42, 22])

    const addRandomNumber = () => {

        var rNum = Math.floor(Math.random() * 100)

        setRandomNumbers([...randomNumbers, rNum])
    }



    return (<>
        <h1>Length : {randomNumbers.length}</h1>

        <ul>
            {
                randomNumbers.map((item) => <li>{item}</li>)
            }
        </ul>

        <button onClick={() => addRandomNumber()}>Random Add</button>


    </>)
}

export default StateArrayRandomAdd