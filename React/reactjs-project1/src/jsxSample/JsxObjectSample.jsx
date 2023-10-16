import React from 'react'

function JsxObjectSample() {

    var user = {
        name: "Burak",
        surname: "Erdem",
        address: {
            city: "İstanbul"
        }
    }

    return (<>
        <h1>{user.name}</h1>
        <h1>{user.surname}</h1>
        <h1>{user.address.city}</h1>
    </>)
}

export default JsxObjectSample