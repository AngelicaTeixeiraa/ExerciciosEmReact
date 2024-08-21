import { useState } from "react";

function Contador(){

    const [cont, setCont] = useState(0); 

    const clicar= () => {
        setCont(cont+1)

    }
    return(
        <div>
            <p>Botão foi clicado {cont} vezes</p>
            <button onClick={clicar}>
                Clique Aqui!
            </button>
        </div>
    );
}

export default Contador;