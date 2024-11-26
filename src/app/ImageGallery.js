import { useState } from "react"

export default function ImageGallery(){
    const urls = [
        "https://i.imgur.com/Q8TPuKq.jpeg",
        "https://i.imgur.com/DoP8q0E.jpeg",
        "https://i.imgur.com/Q8TPuKq.jpeg",
        "https://i.imgur.com/DoP8q0E.jpeg"
    ]
    const [index, setIndex] = useState(0);

    function onNextImage(){
        if(index !== urls.length -1){
            setIndex(index + 1);
        } else{
            setIndex(0);
        }
    }
    function onPrevImage(){
        if(index !== 0){
            setIndex(index - 1);
        } else{
            setIndex(urls.length - 1);
        }
    }
    return(
        <div>
            <h1>Galeria</h1>
            <button onClick={onPrevImage}>Anterior</button>
            <button onClick={onNextImage}>Siguiente</button>
            <p>Imagen {index + 1}/{urls.length}</p>
            <br></br>
            <img src={urls[index]} style={{ maxWidth: "100%" }} />
        </div>
    );
}