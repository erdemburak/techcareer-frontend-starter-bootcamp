import React from 'react'

function JsxIfElse() {
    var onlineStatus = true;

    return (<>
        {
            onlineStatus == true ? <h1>User Online</h1> : <h1>User Offline</h1>
        }
    </>)
}

export default JsxIfElse