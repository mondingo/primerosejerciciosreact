/* 

1. Cambiador de Color de Fondo 

Objetivo del ejercicio:
Practicar eventos en JavaScript y manipulación de estilos del DOM. 

Ejercicio: 
Crea una página web con un botón que diga "Cambiar color". Cada vez que el usuario haga clic en el 
botón, el color de fondo de la página debe cambiar a un color aleatorio.

*/

import Layout from './layout';
import {useState} from 'react'

const Ejercicio1 = () => {
    const [fondo, setFondo] = useState('rgb(255,255,255)');

    const cambiarColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const nuevoColor = `rgb(${red}, ${green}, ${blue})`;

        setFondo(nuevoColor);
    }
    

    return (
        <div
            style = {{ backgroundColor: fondo}}
            className = "min-h-screen flex flex-col items-center justify-center transition-colors duration-500"
        >
            <Layout titulo="Cambiador de Color">
                <p className = "mb-6 font-bold text-gray-500"> Color actual: {fondo} </p>

                <button
                    onClick = {cambiarColor}
                    className = "bg-black text-white font-bold py-4 px-8 rounded-xl hover:scale-110 active:scale-90 transition-transform"
                >
                    CAMBIAR EL COLOR DE FONDO
                </button>
            </Layout>
        </div>
    );
};

export default Ejercicio1;