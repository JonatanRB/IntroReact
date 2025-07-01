import React, { useState } from "react";
import '../assets/Styles/ListaCompras.css'

export default function ListaCompras() {
    const [productos, setProductos] = useState([]);
    const [newProducto, setNewProducto] = useState("");

    const agregarProducto = () => {
        if(newProducto.trim() !== "") {
            setProductos([...productos, newProducto]);
            setNewProducto("");
        }
    };

    const eliminarProducto = (index) => {
        const producto = productos.filter((_, i) => i !== index);
        setProductos(producto);
    };

    return (
    <div className="container">
        <h2>Lista de Compras</h2>
        <div className="input-group">
        <input
            type="text"
            value={newProducto}
            onChange={(e) => setNewProducto(e.target.value)}
            placeholder="Escribe un producto..."
        />
        <button onClick={agregarProducto}>Agregar</button>
    </div>
        <ul className="product-list">
        {productos.map((producto, index) => (
            <li key={index}>
            <span>{producto}</span>
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
            </li>
        ))}
        </ul>
    </div>
    );
}
