import { useState } from "react";

function FormularioCalculoJurosSimples() {
    const [capital, setCapital] = useState("");
    const [taxa, setTaxa] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [juros, setJuros] = useState(null);

    const calcularJurosSimples = () => {
        const capitalNumero = Number(capital);
        const taxaNumero = Number(taxa) / 100;
        const periodoNumero = Number(periodo);
        const resultado = capitalNumero * taxaNumero * periodoNumero;
        setJuros(resultado);
        setCapital("");
        setTaxa("");
        setPeriodo("");
    }

    return <div>
        <h2>Calcular Juros Simples</h2>
        <input type="number" step="0.01" placeholder="Informe o capital"
            value={capital} onChange={(e) => setCapital(e.target.value)} />
        <input type="number" step="0.01" placeholder="Informe a taxa de juros (%)"
            value={taxa} onChange={(e) => setTaxa(e.target.value)} />
        <input type="number" step="0.01" placeholder="Informe o período (em anos)"
            value={periodo} onChange={(e) => setPeriodo(e.target.value)} />
        <button onClick={calcularJurosSimples}>Calcular</button>
        {juros !== null && <p>O valor dos juros simples é: {juros.toFixed(2)}</p>}
    </div>;
}

export default FormularioCalculoJurosSimples;
