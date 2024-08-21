import { useState } from "react";

function FormularioConversaoDias() {
    const [dias, setDias] = useState("");
    const [horas, setHoras] = useState(null);
    const [minutos, setMinutos] = useState(null);
    const [segundos, setSegundos] = useState(null);

    const converterTempo = () => {
        const diasNumero = Number(dias);
        const totalHoras = diasNumero * 24;
        const totalMinutos = totalHoras * 60;
        const totalSegundos = totalMinutos * 60;

        setHoras(totalHoras);
        setMinutos(totalMinutos);
        setSegundos(totalSegundos);
        setDias("");
    }

    return <div>
        <h2>Converter Dias para Horas, Minutos e Segundos</h2>
        <input type="number" step="0.01" placeholder="Informe o valor em dias"
            value={dias} onChange={(e) => setDias(e.target.value)} />
        <button onClick={converterTempo}>Converter</button>
        {horas !== null && <p>Horas: {horas} h</p>}
        {minutos !== null && <p>Minutos: {minutos} min</p>}
        {segundos !== null && <p>Segundos: {segundos} s</p>}
    </div>;
}

export default FormularioConversaoDias;
