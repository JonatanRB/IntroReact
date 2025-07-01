import React, { useState } from "react";
import '../assets/css/Counter.css' 

export default function Counter(){

    const [counter, setCounter] = useState(0);

    function handleSubstractButtom(){
    if(counter <= 0){
        return;
    }
    setCounter(counter - 1)
}

    function handleAddingButtom(){
        setCounter(counter + 1)
    }

    return(
        <div className="counter-container">
            <button onClick={() => handleSubstractButtom() }>-</button>
            <h1>{counter}</h1>
            <button onClick={() => handleAddingButtom()}>+</button>
        </div>
    )
}