import React from 'react'

function JsxIntro() {

    var h1Style = { color: 'tomato' }
    var country = 'Türkiye'

    return (<>
        <h1>{country}</h1>
        <h1 style={h1Style}>Burak Erdem</h1>
    </>)
}

export default JsxIntro