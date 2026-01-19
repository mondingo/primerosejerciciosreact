/* 

6. Temporizador con Inicio, Pausa y Reinicio 

Objetivo del ejercicio: 
Practicar manejo de eventos, funciones de temporización y manipulación del DOM. 

Ejercicio: 
Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” 
y “Reiniciar”. 
• Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas. 
• “Pausar” detiene el conteo pero mantiene el tiempo actual. 
• “Reiniciar” pone el temporizador en 00:00:00. 

*/

import {useState, useRef} from 'react'
import Layout from './layout'


const Boton = ({operacion, click}) => {
    return(
        <button 
            onClick={click}
            className = " h-10 border-1 rounded-md bg-red-300 px-6 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] m-4 hover:scale-110 hover:bg-red-400"
        >
            {operacion}
        </button>
    )
}

const Ejercicio6 = () => {

    const [segundos, setSegundos] = useState(0)
    const [activo, setActivo] = useState(false)

    const idIntervalo = useRef(null)

    const formatearTiempo = (totalSegundos) => {
        const horas = Math.floor(totalSegundos / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        const segundosRestantes = totalSegundos % 60;
    
        // Esto añade un "0" a la izquierda si el número es menor de 10
        const pad = (n) => n.toString().padStart(2, "0");
    
        return `${pad(horas)}:${pad(minutos)}:${pad(segundosRestantes)}`;
    };


    const iniciar = () => {
        if (activo) return

        setActivo(true);

        idIntervalo.current = setInterval(() => {
            setSegundos((valorAnterior) => valorAnterior + 1)
        }, 1000)
    }

    const pausar = () => {
        if (activo === false) return

        setActivo(false);

        if (idIntervalo.current) clearInterval(idIntervalo.current)

    }

    const reiniciar = () => {
        if (idIntervalo.current) clearInterval(idIntervalo.current)
        setActivo(false)
        setSegundos(0)
    }



    return(
        <Layout titulo="cronómetro">
            <h1 className="text-2xl font-black mb-6 uppercase">{formatearTiempo(segundos)}</h1>
            <div>
                <Boton operacion="Iniciar" click={() => iniciar()}>
                </Boton>
                <Boton operacion="Pausar" click={() => pausar()}>
                </Boton>
                <Boton operacion="Reiniciar" click={() => reiniciar()}>
                </Boton>
            </div>

        </Layout>

    )
}


export default Ejercicio6;