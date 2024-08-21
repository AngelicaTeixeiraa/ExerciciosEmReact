import { useState } from "react";

function FormularioCalculoDesconto() {
    const [preco, setPreco] = useState("");
    const [desconto, setDesconto] = useState("");
    const [precoComDesconto, setPrecoComDesconto] = useState(null);

    const calcularPrecoComDesconto = () => {
        const precoNumero = Number(preco);
        const descontoNumero = Number(desconto);
        const resultado = precoNumero - (precoNumero * (descontoNumero / 100));
        setPrecoComDesconto(resultado);
        setPreco("");
        setDesconto("");
    }

    return <div>
        <h2>Calcular Preço com Desconto</h2>
        <input type="number" step="0.01" placeholder="Informe o preço"
            value={preco} onChange={(e) => setPreco(e.target.value)} />
        <input type="number" step="0.01" placeholder="Informe o percentual de desconto"
            value={desconto} onChange={(e) => setDesconto(e.target.value)} />
        <button onClick={calcularPrecoComDesconto}>Calcular</button>
        {precoComDesconto !== null && <p>O preço com desconto é: {precoComDesconto.toFixed(2)}</p>}
    </div>;
}

export default FormularioCalculoDesconto;
