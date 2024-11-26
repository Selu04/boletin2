'use client'
import { useState } from "react";

export default function LoginForm(){
    const usuarios = [
        {nombre : 'pedro', password: 'pedro123'},
        {nombre : 'pablo', password: 'pablo123'},
        {nombre : 'maria', password: 'maria123'}
    ]
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    function compUser(e){
        e.preventDefault();
        if (user.trim() === '' || pass.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }
        const usuarioValido = usuarios.find(
            usuario => usuario.nombre === user && usuario.password === pass
        );
        if (usuarioValido) {
            alert(`Bienvenido ${user}`);
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    }
    return(
        <div>
            <form onSubmit={compUser}>
                <input value={user} onChange={e => setUser(e.target.value)} placeholder="Usuario"></input>
                <br></br>
                <input value={pass} onChange={e => setPass(e.target.value)} placeholder="Contraseña"></input>
                <br></br>
                <button type="submit" value="log">Iniciar Sesion</button>
            </form>
        </div>
    );
}