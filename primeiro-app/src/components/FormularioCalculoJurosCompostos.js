import { useState } from "react";

function FormularioCalculoJurosCompostos() {
    const [capital, setCapital] = useState("");
    const [taxa, setTaxa] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [montante, setMontante] = useState(null);

    const calcularMontante = () => {
        const capitalNumero = Number(capital);
        const taxaNumero = Number(taxa) / 100; 
        const periodoNumero = Number(periodo);
        const resultado = capitalNumero * Math.pow(1 + taxaNumero, periodoNumero);
        setMontante(resultado);
        setCapital("");
        setTaxa("");
        setPeriodo("");
    }

    return <div>
        <h2>Calcular Montante com Juros Compostos</h2>
        <input type="number" step="0.01" placeholder="Informe o capital"
            value={capital} onChange={(e) => setCapital(e.target.value)} />
        <input type="number" step="0.01" placeholder="Informe a taxa de juros (%)"
            value={taxa} onChange={(e) => setTaxa(e.target.value)} />
        <input type="number" step="0.01" placeholder="Informe o período (em anos)"
            value={periodo} onChange={(e) => setPeriodo(e.target.value)} />
        <button onClick={calcularMontante}>Calcular</button>
        {montante !== null && <p>O montante com juros compostos é: {montante.toFixed(2)}</p>}
    </div>;
}

export default FormularioCalculoJurosCompostos;
