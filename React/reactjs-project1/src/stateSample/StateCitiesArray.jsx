import React, { useState } from 'react'

function StateCitiesArray() {
    const [cities, setCities] = useState(["istanbul", "ankara", "izmir", "düzce", "eskisehir", "adana"])

    return (<>
        <h1>Length : {cities.length}</h1>

        <ul>
            {
                cities.map((item) => <li>{item}</li>)
            }
        </ul>

        <button onClick={() => setCities([])}>Clear List</button>

    </>)
}

export default StateCitiesArray