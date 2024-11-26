import { useState } from "react";

export default function GuessTheNumber(){
    const [number] = useState(Math.floor(Math.random() * 101));
    const [num, setNum] = useState('');
    const [msj, setMsj] = useState('');
    const [intento, setIntento] = useState(0);

    function compNum(){
        if(num.trim() !== ''){
            const parsedNum = parseInt(num, 10);
            if (parsedNum === number) {
                setMsj(`¡Adivinaste! El número era ${number}`);
            } else if (parsedNum > number) {
                setMsj(`El número ${parsedNum} es mayor.`);
            } else {
                setMsj(`El número ${parsedNum} es menor.`);
            }
            setIntento(intento+1);
            setNum('');
        } else{
            alert('Primero rellena el numero');
        }
    }
    return(
        <div>
            <h1>Adivina el numero</h1>
            <input
                value={num}
                onChange={e => setNum(e.target.value)}
                placeholder="Prueba un numero"></input>
            <button onClick={compNum}>Comprobar</button>
            <p>{msj}</p>
            <p>Numero de intentos: {intento}</p>
        </div>
    );

}