/* 

2. Contador de Clics 

Objetivo del ejercicio:
Practicar el manejo de eventos y la actualización del contenido del DOM. 

Ejercicio: 
Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada 
vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics 
realizados.

*/
import Layout from './layout';
import {useState} from 'react';

const Ejercicio2 = () => {

    const [miContador, setMiContador] = useState(0)

    return (
        <div>
            <Layout titulo="Contador de clicks">
                <p className="text-3xl font-black mb-6 uppercase italic">{miContador}</p>

                <button
                    onClick = {() =>
                        setMiContador(miContador-1)
                    }
                    className = "bg-black mr-10 px-16 py-4 text-white font-bold rounded-xl hover:scale-110 active:scale-90 transition-transform"
                >
                    -
                </button>

                <button
                    onClick = {() =>
                        setMiContador(miContador+1)
                    }
                    className = "bg-black ml-10 px-16 py-4 text-white font-bold rounded-xl hover:scale-110 active:scale-90 transition-transform"
                >
                    +
                </button>

            </Layout>
        </div>
    )
}

export default Ejercicio2;