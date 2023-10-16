import React, { useState } from 'react'

function StateNameArray() {

    const [name, setName] = useState("")
    const [users, setUsers] = useState(["Armağan", "Burak"])

    const addName = () => {
        setUsers([...users, name])
    }


    return (<>
        <button onClick={() => setUsers([])}>Clear</button>
        <h1>Length : {users.length}</h1>
        <div>
            <label>Name :</label>
            <input type='text' onChange={(e) => setName(e.target.value)} />
        </div>
        <button onClick={() => addName()}>Add</button>

        <ul>
            {
                users.map((item) => <li>{item}</li>)
            }
        </ul>


    </>)
}

export default StateNameArray