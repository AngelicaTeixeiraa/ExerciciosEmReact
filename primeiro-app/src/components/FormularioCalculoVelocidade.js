import { useState } from "react";

function FormularioCalculoVelocidade() {
    const [distancia, setDistancia] = useState("");
    const [tempo, setTempo] = useState("");
    const [velocidade, setVelocidade] = useState(null);

    const calcularVelocidade = () => {
        const distanciaNumero = Number(distancia);
        const tempoNumero = Number(tempo);
        if (tempoNumero === 0) {
            alert("O tempo não pode ser zero.");
            return;
        }
        const resultado = distanciaNumero / tempoNumero;
        setVelocidade(resultado);
        setDistancia("");
        setTempo("");
    }

    return <div>
        <h2>Calcular Velocidade Média</h2>
        <input type="number" step="0.01" placeholder="Informe a distância"
            value={distancia} onChange={(e) => setDistancia(e.target.value)} />
        <input type="number" step="0.01" placeholder="Informe o tempo"
            value={tempo} onChange={(e) => setTempo(e.target.value)} />
        <button onClick={calcularVelocidade}>Calcular</button>
        {velocidade !== null && <p>A velocidade média é: {velocidade.toFixed(2)} unidades por tempo</p>}
    </div>;
}

export default FormularioCalculoVelocidade;
