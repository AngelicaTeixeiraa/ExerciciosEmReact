import { useState } from "react";

function FormularioCalculoArea() {
    const [largura, setLargura] = useState("");
    const [altura, setAltura] = useState("");
    const [area, setArea] = useState(null);

    const calcularArea = () => {
        const resultado = Number(largura) * Number(altura);
        setArea(resultado);
        setLargura("");
        setAltura("");
    }

    return <div>
        <h2>Calcular Área do Retângulo</h2>
        <input type="number" placeholder="Informe a largura"
            value={largura} onChange={(e) => setLargura(e.target.value)} />
        <input type="number" placeholder="Informe a altura"
            value={altura} onChange={(e) => setAltura(e.target.value)} />
        <button onClick={calcularArea}>Calcular</button>
        {area !== null && <p>A área do retângulo é: {area} unidades quadradas</p>}
    </div>;
}

export default FormularioCalculoArea;
