import { useState } from "react";

function FormularioConversaoTemperatura() {
    const [fahrenheit, setFahrenheit] = useState("");
    const [celsius, setCelsius] = useState(null);

    const converterParaCelsius = () => {
        const resultado = (Number(fahrenheit) - 32) * 5/9;
        setCelsius(resultado);
        setFahrenheit("");
    }

    return <div>
        <h2>Converter Fahrenheit para Celsius</h2>
        <input type="number" placeholder="Informe a temperatura em Fahrenheit"
            value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} />
        <button onClick={converterParaCelsius}>Converter</button>
        {celsius !== null && <p>A temperatura em Celsius é: {celsius.toFixed(2)}°C</p>}
    </div>;
}

export default FormularioConversaoTemperatura;
