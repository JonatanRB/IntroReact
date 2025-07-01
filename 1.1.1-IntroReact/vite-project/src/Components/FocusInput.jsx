import React, { useRef } from "react";

export default function FocusInput () {
    const inputRef =  useRef(null);

    const handleClick = () => {
        inputRef.current.focus()
        console.log(`El imput tiene guardado: ${inputRef.current.value}`);
        
    }

    const printInputText = () => {
        console.log(inputRef.current.value);
        
    }

    return (
        <div>
            <input type="text" ref={inputRef} onChange={() => printInputText()}/>
            <button onClick={() => handleClick()}>Focus Buttom</button>
        </div>
    )
}