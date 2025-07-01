import React, { useEffect, useState } from "react";

export default function Timer () {
    const [time, setTime] = useState(0);
    const [active, setActive] = useState(false);

    useEffect(() => {
        let idInterval = null;

        if(active){
            idInterval = setInterval(() => {
                setTime(previousTime => previousTime + 1)
            }, 1000)
        }

        console.log('El temporizador avanza');
        

        return () => {
            if(idInterval){
                clearInterval(idInterval);
                console.log('El temporizador se pauso');
            }
        }
    }, [active]);

    const toggleTimer = () => {
        setActive(!active);
    }


    const reset = () => {
        setActive(false);
        setTime(0);
    }

    return(
        <div>
            <h1>
                Timer:{time} : {time} 
            </h1>
            <div>
                <button onClick={() => toggleTimer()}>
                    {active ? 'Pausar' : 'Iniciar'} temporizador
                </button>
                <button onClick={() => reset()}>Reiniciar</button>
            </div>
        </div>
    )
}