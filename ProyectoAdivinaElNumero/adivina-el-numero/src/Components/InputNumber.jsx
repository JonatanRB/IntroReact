import React from 'react';

const InputNumber = ({ value, onChange, onCheck }) => {
return (
    <div>
        <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ingresa un número"
    />
        <button onClick={onCheck}>Comprobar</button>
    </div>
    );
};

export default InputNumber;
