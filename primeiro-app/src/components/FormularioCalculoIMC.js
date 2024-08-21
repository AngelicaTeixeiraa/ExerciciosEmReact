import { useState } from "react";

function FormularioCalculoIMC() {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setImc] = useState(null);

    const calcularIMC = () => {
        const resultado = Number(peso) / Math.pow(Number(altura), 2);
        setImc(resultado);
        setPeso("");
        setAltura("");
    }

    return <div>
        <h2>Calcular IMC</h2>
        <input type="number" step="0.01" placeholder="Informe o peso em kg"
            value={peso} onChange={(e) => setPeso(e.target.value)} />
        <input type="number" step="0.01" placeholder="Informe a altura em metros"
            value={altura} onChange={(e) => setAltura(e.target.value)} />
        <button onClick={calcularIMC}>Calcular IMC</button>
        {imc !== null && <p>O seu IMC é: {imc.toFixed(2)}</p>}
    </div>;
}

export default FormularioCalculoIMC;
