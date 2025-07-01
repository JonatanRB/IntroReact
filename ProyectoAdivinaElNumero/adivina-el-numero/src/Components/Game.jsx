import React, { useState } from 'react';
import InputNumber from './InputNumber';
import Message from './Message';
import RestartButton from './RestartButton';

const Game = () => {
    const [numero, setNumero] = useState(generateRandomNumber());
    const [numeroIngresado, setNumeroIngresado] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [intentos, setIntentos] = useState(0);

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

const handleInputChange = (valor) => {
    setNumeroIngresado(valor);
};

const checkNumber = () => {
    const adivinar = parseInt(numeroIngresado);
    if (isNaN(adivinar)) {
        setMensaje('Por favor ingresa un número válido');
        return;
    }

    setIntentos(intentos + 1); 

    if (adivinar === numero) {
        setMensaje(`¡Correcto! Lo lograste en ${intentos + 1} intento${intentos + 1 === 1 ? '' : 's'}`);
    } else if (adivinar < numero) {
        setMensaje('El número es mayor');
    } else {
        setMensaje('El número es menor');
    }
};

const handleRestart = () => {
    setNumero(generateRandomNumber());
    setNumeroIngresado('');
    setMensaje('');
    setIntentos(0);
};

return (
    <div>
        <h1>
        Adivina el número (1 - 100)
        </h1>

        <InputNumber value={numeroIngresado} onChange={handleInputChange} onCheck={checkNumber} />
        <Message text={mensaje} />

        <p>Intentos: <strong>{intentos}</strong></p>

        <RestartButton onRestart={handleRestart} />
    </div>
    );
};

export default Game;

