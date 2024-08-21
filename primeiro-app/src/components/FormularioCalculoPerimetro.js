import { useState } from "react";

function FormularioCalculoPerimetro() {
    const [largura, setLargura] = useState("");
    const [altura, setAltura] = useState("");
    const [perimetro, setPerimetro] = useState(null);

    const calcularPerimetro = () => {
        const resultado = 2 * (Number(largura) + Number(altura));
        setPerimetro(resultado);
        setLargura("");
        setAltura("");
    }

    return <div>
        <h2>Calcular Perímetro do Retângulo</h2>
        <input type="number" placeholder="Informe a largura"
            value={largura} onChange={(e) => setLargura(e.target.value)} />
        <input type="number" placeholder="Informe a altura"
            value={altura} onChange={(e) => setAltura(e.target.value)} />
        <button onClick={calcularPerimetro}>Calcular</button>
        {perimetro !== null && <p>O perímetro do retângulo é: {perimetro} unidades</p>}
    </div>;
}

export default FormularioCalculoPerimetro;
