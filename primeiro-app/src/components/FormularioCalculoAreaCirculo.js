import { useState } from "react";

function FormularioCalculoAreaCirculo() {
    const [raio, setRaio] = useState("");
    const [area, setArea] = useState(null);

    const calcularArea = () => {
        const resultado = Math.PI * Math.pow(Number(raio), 2);
        setArea(resultado);
        setRaio("");
    }

    return <div>
        <h2>Calcular Área do Círculo</h2>
        <input type="number" placeholder="Informe o raio do círculo"
            value={raio} onChange={(e) => setRaio(e.target.value)} />
        <button onClick={calcularArea}>Calcular</button>
        {area !== null && <p>A área do círculo é: {area.toFixed(2)} unidades quadradas</p>}
    </div>;
}

export default FormularioCalculoAreaCirculo;
