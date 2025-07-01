import React from 'react';

const RestartButton = ({ onRestart }) => {
    return (
    <button onClick={onRestart} style={{ marginTop: '20px' }}>
        Reiniciar Juego
    </button>
    );
};

export default RestartButton;
