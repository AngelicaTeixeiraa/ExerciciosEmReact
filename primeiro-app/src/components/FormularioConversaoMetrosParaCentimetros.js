import { useState } from "react";

function FormularioConversaoMetrosParaCentimetros() {
    const [metros, setMetros] = useState("");
    const [centimetros, setCentimetros] = useState(null);

    const converterParaCentimetros = () => {
        const resultado = Number(metros) * 100;
        setCentimetros(resultado);
        setMetros("");
    }

    return <div>
        <h2>Converter Metros para Centímetros</h2>
        <input type="number" placeholder="Informe o valor em metros"
            value={metros} onChange={(e) => setMetros(e.target.value)} />
        <button onClick={converterParaCentimetros}>Converter</button>
        {centimetros !== null && <p>O valor em centímetros é: {centimetros} cm</p>}
    </div>;
}

export default FormularioConversaoMetrosParaCentimetros;
