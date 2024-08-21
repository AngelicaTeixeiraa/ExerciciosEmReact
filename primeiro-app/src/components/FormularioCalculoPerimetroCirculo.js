import { useState } from "react";

function FormularioCalculoPerimetroCirculo() {
    const [raio, setRaio] = useState("");
    const [perimetro, setPerimetro] = useState(null);

    const calcularPerimetro = () => {
        const resultado = 2 * Math.PI * Number(raio);
        setPerimetro(resultado);
        setRaio("");
    }

    return <div>
        <h2>Calcular Perímetro do Círculo</h2>
        <input type="number" placeholder="Informe o raio do círculo"
            value={raio} onChange={(e) => setRaio(e.target.value)} />
        <button onClick={calcularPerimetro}>Calcular</button>
        {perimetro !== null && <p>O perímetro do círculo é: {perimetro.toFixed(2)} unidades</p>}
    </div>;
}

export default FormularioCalculoPerimetroCirculo;
