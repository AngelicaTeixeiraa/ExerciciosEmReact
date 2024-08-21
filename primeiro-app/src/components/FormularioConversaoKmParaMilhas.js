import { useState } from "react";

function FormularioConversaoKmParaMilhas() {
    const [quilometros, setQuilometros] = useState("");
    const [milhas, setMilhas] = useState(null);

    const converterParaMilhas = () => {
        const resultado = Number(quilometros) * 0.621371;
        setMilhas(resultado);
        setQuilometros("");
    }

    return <div>
        <h2>Converter Quilômetros para Milhas</h2>
        <input type="number" placeholder="Informe o valor em quilômetros"
            value={quilometros} onChange={(e) => setQuilometros(e.target.value)} />
        <button onClick={converterParaMilhas}>Converter</button>
        {milhas !== null && <p>O valor em milhas é: {milhas.toFixed(2)} mi</p>}
    </div>;
}

export default FormularioConversaoKmParaMilhas;
