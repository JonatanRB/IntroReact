import { useState } from "react";
import "../assets/css/ConditionalSquare.css"

export default function ConditionalSquera () {
    const [flag, setFlag] =useState(true)

    return (
        <div className={flag ? "redBox" : "blueBox"} onClick={() => setFlag(!flag)}>
            <h1>El estado de este cuadrado es: {flag}</h1>
        </div>
    )
}