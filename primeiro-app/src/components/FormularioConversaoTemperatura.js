import { useState } from "react";

function FormularioConversaoTemperatura() {
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState(null);

    const converterParaFahrenheit = () => {
        const resultado = (Number(celsius) * 9/5) + 32;
        setFahrenheit(resultado);
        setCelsius("");
    }

    return <div>
        <h2>Converter Celsius para Fahrenheit</h2>
        <input type="number" placeholder="Informe a temperatura em Celsius"
            value={celsius} onChange={(e) => setCelsius(e.target.value)} />
        <button onClick={converterParaFahrenheit}>Converter</button>
        {fahrenheit !== null && <p>A temperatura em Fahrenheit é: {fahrenheit.toFixed(2)}°F</p>}
    </div>;
}

export default FormularioConversaoTemperatura;
