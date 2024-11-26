'use client'
import { useState } from "react";

export default function LimitedCounter(){
    const [count, setCount] = useState(0);
    const [max, setMax] = useState(0);
    function incrementCount(){ //incrementa el contador siempre que sea mas pequeño que el maximo
        if(count < max){
            setCount(count+1);
        }
    }
    function resetCount(){ //resetea a 0 el contador
        setCount(0);
    }
    return(
        <div>
            <h1>Contador limtado</h1>
            <p>Contador actual: {count}</p>
            <input type="number" value={max} onChange={e => setMax(e.target.value)}></input>
            <button onClick={incrementCount}>Incrementar contador</button>
            <button onClick={resetCount}>Resetear contador</button>
        </div>
    );
}