import { useState, useEffect } from "react";
import "./Cronometro.css";
export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [correndo, setRunning] = useState(false);

    useEffect(() => {
        if (!correndo) return;

        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [correndo]);

    const parar = () => setRunning(false);
    const resetear = () => {
        setSeconds(0);
        setRunning(false);
    };
    const start = () => setRunning(true);

    return (
        <div className="temporization">
            <div className="seconds">
                <h1>Temporizador em segundos</h1>
                <p className="number">{seconds}</p>
                <p>Secondos</p>
            </div>
            <div className="buttons">
                <button onClick={start}>Iniciar</button>
                <button onClick={parar}>Parar</button>
                <button onClick={resetear}>Zerar</button>
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
