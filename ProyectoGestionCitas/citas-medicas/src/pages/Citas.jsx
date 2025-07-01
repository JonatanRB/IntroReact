import { Link } from 'react-router-dom';

export default function Citas() {
    const citas = [
    { id: 1, paciente: 'Juan Pérez' },
    { id: 2, paciente: 'María López' },
    { id: 3, paciente: 'Carlos Ruiz' },
    ];

    return (
    <div>
        <h1>Lista de Citas</h1>
        <ul>
        {citas.map(cita => (
            <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>
                Cita #{cita.id} – {cita.paciente}
            </Link>
            </li>
        ))}
        </ul>
    </div>
    );
}
