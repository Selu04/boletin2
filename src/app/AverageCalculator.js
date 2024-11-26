'use client';
import { useState } from "react";

export default function AverageCalculator() {
  const [num, setNum] = useState(''); 
  const [nums, setNums] = useState([]); // Lista de números
  const [media, setMedia] = useState(null); // Media, inicializada como null para mostrar solo cuando se calcule

  // Agregar un número a la lista
  function addNum() {
    if (num.trim() !== '' && !isNaN(num)) { // Verificar que sea un número válido
      setNums([...nums, parseFloat(num)]); // Convertir a número antes de añadir
      setNum(''); // Limpiar el campo de entrada
    }
  }

  // Calcular la media
  function calculateAverage() {
    if (nums.length > 0) {
      const sum = nums.reduce((acc, curr) => acc + curr, 0); // Sumar todos los números
      setMedia(sum / nums.length); // Calcular y actualizar la media
    }
  }

  return (
    <div>
      <h1>Calculadora de Media</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)} // Actualizar el valor ingresado
        placeholder="Calificación"
      />
      <button onClick={addNum}>Añadir calificación</button>
      <br />
      <button onClick={calculateAverage}>Calcular media</button>
      <br />
      <p>Calificaciones: {nums.join(', ')}</p> {/* Mostrar las calificaciones agregadas */}
      {media !== null && <p>Media: {media.toFixed(2)}</p>} {/* Mostrar la media solo si se ha calculado */}
    </div>
  );
}
