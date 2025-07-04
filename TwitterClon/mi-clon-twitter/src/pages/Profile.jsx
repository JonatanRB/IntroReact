import React from "react";

const Profile = ({ user }) => (
    <div>
    <h1>Perfil</h1>
    {user ? (
        <p>Nombre de usuario: {user.username}</p>
    ) : (
        <p>No hay usuario autenticado</p>
    )}
    </div>
);

export default Profile;
