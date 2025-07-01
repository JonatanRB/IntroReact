import React from "react";
import '../assets/Styles/Tarjeta.css'

export default function Tarjeta() {

    const nombre = "Jonatan Rea";
    const profesion = "Estudios en Ing.Tic's";
    const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

    return (
        <div className="tarjeta-container">
            <h2>{nombre}</h2>
            <h4>{profesion}</h4>
            <p>{mensaje}</p>

            <div  className="link-container">
                <a href="https://github.com/JonatanRB"><img src="https://cdn.iconscout.com/icon/free/png-256/free-github-40-432516.png?f=webp" alt="Github" /></a>
                <a href="https://www.linkedin.com/in/jonatan-rea-barbosa-b08835336/"><img src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="Linkedin" /></a>
            </div>
        </div>
    );
}