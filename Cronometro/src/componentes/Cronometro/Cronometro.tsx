import { useState, useEffect } from "react";
import "./Cronometro.css";

function Cronometro() {
    const [segundos, setSegundos] = useState(0);
    const [ativo, setAtivo] = useState(false);

    useEffect(() => {
        if (!ativo) return;

        const intervalo = setInterval(() => {
            setSegundos((anterior) => anterior + 1);
        }, 1000);

        return () => clearInterval(intervalo);
    }, [ativo]);

    const iniciar = () => setAtivo(true);
    const parar = () => setAtivo(false);
    const zerar = () => {
        setSegundos(0);
        setAtivo(false);
    };

    return (
        <div className="temporization">
            <div className="seconds">
                <h1>Temporizador em segundos</h1>
                <p className="number">{segundos}</p>
                <p>Segundos</p>
            </div>
            <div className="buttons">
                <button onClick={iniciar}>Iniciar</button>
                <button onClick={parar}>Parar</button>
                <button onClick={zerar}>Zerar</button>
            </div>
            <div className="Nomes">
                <h2>Desenvolvido por:</h2>
                <h4>alexander_gomez@estudante.sesisenai.org.br</h4>
                <h4>fernando_h_aquino@estudante.sesisenai.org.br</h4>
                <h4>jose_santos4@estudante.sc.senai.br</h4>
            </div>
        </div>
    );
}

export default Cronometro
