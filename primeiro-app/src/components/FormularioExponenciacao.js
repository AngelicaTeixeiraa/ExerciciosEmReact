import { useState } from "react";

function FormularioExponenciacao() {
    const [base, setBase] = useState("");
    const [expoente, setExpoente] = useState("");
    const [resultado, setResultado] = useState(null);

    const calcularExponenciacao = () => {
        const resultadoCalculado = Math.pow(Number(base), Number(expoente));
        setResultado(resultadoCalculado);
        setBase("");
        setExpoente("");
    }

    return <div>
        <h2>Calcular Exponenciação</h2>
        <input type="number" placeholder="Informe a base"
            value={base} onChange={(e) => setBase(e.target.value)} />
        <input type="number" placeholder="Informe o expoente"
            value={expoente} onChange={(e) => setExpoente(e.target.value)} />
        <button onClick={calcularExponenciacao}>Calcular</button>
        {resultado !== null && <p>O resultado de {base} elevado a {expoente} é: {resultado}</p>}
    </div>;
}

export default FormularioExponenciacao;
