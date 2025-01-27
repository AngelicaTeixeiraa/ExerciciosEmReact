import { useState } from "react";

function FormularioMultiplicacao() {
    const [resultado, setResultado] = useState(0);
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");

    const multiplicar = () => {
        setResultado(Number(valor1) * Number(valor2));
        setValor1("");
        setValor2("");
    }

    return <div>
        <h2>Multiplicar valores</h2>
        <input type="number" placeholder="Informe o valor 1"
            value={valor1} onChange={(e) => setValor1(e.target.value)} />
        <input type="number" placeholder="Informe o valor 2"
            value={valor2} onChange={(e) => setValor2(e.target.value)} />
        <button onClick={multiplicar}>Calcular</button>
        <p>O valor da multiplicação é: {resultado}</p>
    </div>;
}

export default FormularioMultiplicacao;
