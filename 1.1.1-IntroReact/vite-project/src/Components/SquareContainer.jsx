import React from "react";
import "../assets/css/SquareContainer.css"

export default function squareControl ([children]) {
    return(
        <div className="container">
        {children}
    </div>
    )
}