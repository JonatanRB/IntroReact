import React, { useReducer, useRef, useEffect, useState, useCallback } from "react";

// Estado inicial
const initialState = {
  count: 0,
  history: [],
};

// Función de inicialización (carga localStorage si existe)
function init(initialState) {
  const saved = localStorage.getItem("counterGame");
  return saved ? JSON.parse(saved) : initialState;
}

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      const delta = action.payload ?? 1;
      return {
        count: state.count + delta,
        history: [...state.history, { delta, next: state.count + delta }],
      };
    }
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, { delta: -1, next: state.count - 1 }],
      };
    case "undo": {
      const history = [...state.history];
      if (history.length === 0) return state;
      const last = history.pop();
      return {
        count: state.count - last.delta,
        history,
      };
    }
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const [step, setStep] = useState(1);
  const incRef = useRef(null);

  // Guardar en localStorage cada vez que cambia el estado
  useEffect(() => {
    localStorage.setItem("counterGame", JSON.stringify(state));
  }, [state]);

  // Enfocar el botón al inicio
  useEffect(() => {
    incRef.current?.focus();
  }, []);

  // Handlers
  const handleIncrement = useCallback(() => {
    const value = Number(step);
    if (!isNaN(value) && value !== 0) {
      dispatch({ type: "increment", payload: value });
    }
  }, [step]);

  const handleDecrement = useCallback(() => dispatch({ type: "decrement" }), []);
  const handleUndo = useCallback(() => dispatch({ type: "undo" }), []);
  const handleReset = useCallback(() => dispatch({ type: "reset" }), []);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h2>Contador: {state.count}</h2>

      <div>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(e.target.value)}
          style={{ width: 60, marginRight: 10 }}
        />
        <button ref={incRef} onClick={handleIncrement}>
          +{step}
        </button>
        <button onClick={handleDecrement}>–1</button>
        <button onClick={handleUndo} disabled={state.history.length === 0}>
          Deshacer
        </button>
        <button onClick={handleReset}>Reiniciar</button>
      </div>

      <h3>Historial:</h3>
      <ul>
        {state.history.map((h, i) => (
          <li key={i}>
            {`${h.delta > 0 ? "+" : ""}${h.delta} → ${h.next}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

