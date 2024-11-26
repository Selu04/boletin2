'use client'
import { useState } from "react";

export default function SurveySimulator(){
    const [countSi, setCountSi] = useState(0);
    const [countNo, setCountNo] = useState(0);
    const [countTV, setCountTV] = useState(0);
    return(
        <div>
            <h1>Encuesta</h1>
            <p>¿Hoy es soleado?</p>
            <button onClick={() => setCountSi(countSi+1)}>Si</button>
            <button onClick={() => setCountNo(countNo+1)}>No</button>
            <button onClick={() => setCountTV(countTV+1)}>Tal vez</button>
            <p>Si: {countSi} {(countSi*100/(countSi+countNo+countTV)).toFixed(2)}%,  No: {countNo} {(countNo*100/(countSi+countNo+countTV)).toFixed(2)}%,  Tal Vez: {countTV} {(countTV*100/(countSi+countNo+countTV)).toFixed(2)}%</p>
        </div>
    );

}