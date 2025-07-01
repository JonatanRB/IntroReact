import React, {useEffect, useState, useMemo} from 'react'
import Planeta from './assets/Components/Planeta';
import './App.css'

function App() {

  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  useEffect(() => {
    console.log("¡El panel de control está listo!");

    const intervalo = setInterval(() => {
      setCombustible(combustible => (combustible > 0 ? combustible - 1 : 0));
      setDistancia(distancia => (setCombustible === 0 ? 0 : distancia + 10) );
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log("El panel de control se ha apagado.");
    };
  }, []);

  useEffect(() => {
    console.log("¡Combustible actualizado!");
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const aterrizar = () => {
    const nombrePlaneta = `Planeta ${planetasVisitados.length + 1}`;
    setEstadoNave("Aterrizando");
    setPlanetasVisitados([...planetasVisitados, nombrePlaneta]);
  };

  return (
    <div>
      <h1>Panel de Control</h1>
      <p>Distancia: {distancia} km</p>
      <p>Combustible: {combustible}%</p>
      <p>{mensajeEstado}</p>
      <button onClick={aterrizar} disabled={combustible === 0}>
        Aterrizar
      </button>

      <h2>Planetas Visitados</h2>
      {planetasVisitados.map((nombre, index) => (
        <Planeta key={index} nombre={nombre} />
      ))}
    </div>
  );
}

export default App
