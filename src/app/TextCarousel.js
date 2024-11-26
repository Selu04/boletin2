import { useState } from "react";

export default function TextCarrusel({texts}){
    const [index, setIndex] = useState(0);

    function onNextText(){
        if(index !== texts.length -1){
            setIndex(index + 1);
        } else{
            setIndex(0);
        }
    }
    function onPrevText(){
        if(index !== 0){
            setIndex(index - 1);
        } else{
            setIndex(texts.length - 1);
        }
    }
    return(
        <div>
            <h1>Galeria</h1>
            <button onClick={onPrevText}>Anterior</button>
            <button onClick={onNextText}>Siguiente</button>
            <p>{texts[index]}</p>
        </div>
    );
}