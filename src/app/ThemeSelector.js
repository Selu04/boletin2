import { useState } from "react";

export default function ThemeSelector() {
    const themes = {
        claro: { backgroundColor: "#ffffff", color: "#000000" },
        oscuro: { backgroundColor: "#333333", color: "#ffffff" },
        colorido: { backgroundColor: "#ffcc00", color: "#3333ff" },
    };

    const [theme, setTheme] = useState("claro"); // Tema predeterminado

    return (
        <div style={{ ...themes[theme]}}>
            <h1>Selector de Tema</h1>
            <p>Elige un tema para cambiar el color del fondo:</p>
            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={() => setTheme("claro")}>Claro</button>
                <button onClick={() => setTheme("oscuro")}>Oscuro</button>
                <button onClick={() => setTheme("colorido")}>Colorido</button>
            </div>
        </div>
    );
}
