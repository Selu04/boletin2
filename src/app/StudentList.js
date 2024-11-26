'use client'
import { useState } from "react";

export default function StudentList(){
    const [estudiante, setEstudiante] = useState('');
    const [estudiantes, setEstudiantes] = useState([]);

    function addEstudiante(){
        if(estudiante.trim !== ''){ //comprueba que estudiante no sea vacio
            setEstudiantes([...estudiantes, estudiante]); //añade el estudiante a la ultima posicion
            setEstudiante('');
        }
    }
    function deleteEstudiante(index){
        setEstudiantes(estudiantes.filter((_, i) => i !== index)); //Guarda en el array todos menos el indice que eliminamos
    }
    return(
        <div>
            <h1>Lista de estudiantes</h1>
            <input value={estudiante} onChange={e => setEstudiante(e.target.value)} placeholder="Nombre del estudiante"></input>
            <button onClick={addEstudiante}>Añadir estudiante</button>
            {estudiantes.map((estu, index) => 
                <div key={index}>
                    <p>{estu} <button onClick={() => deleteEstudiante(index)}>Eliminar estudiante</button></p>
                </div>)}
        </div>
    );
}