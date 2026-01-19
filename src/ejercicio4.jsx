/* 
4. Filtro de Búsqueda en Tiempo Real 

Objetivo del ejercicio: 
Practicar la interacción entre eventos del DOM y lógica en JavaScript. 

Ejercicio: 
Crea una página con un campo de texto y una lista predefinida de elementos. 
● Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para 
mostrar solo los elementos que contienen el texto escrito. 
Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el usuario escribe "Ga", solo "Gato" debe 
quedar visible. 

*/

import Layout from './layout';
import {useState} from 'react';

const ejercicio4 = () => {

    const animales = ['perro','gato','iguana','lagarto','colibri']
    const [buscador, setBuscador] = useState("")

    const animalesFiltrados = animales.filter((animal) => 
        animal.toLowerCase().includes(buscador.toLowerCase())
    )

    return(
        <Layout titulo="Filtro de busqueda en tiempo real">
            <div>
                <input 
                    type="text"
                    className = "border-2 rounded-md bg-gray-300"
                    placeholder=" ... "
                    value = {buscador}
                    onChange={(e) => setBuscador(e.target.value)}
                />
                <ul className = "italic font-bold text-xl mt-6">

                {animalesFiltrados.length === 0 ? (
                    <p className = "italic font-bold text-xl mt-6 text-red-400"> No se encontraron resultados</p>
                ) : (
                    animalesFiltrados.map((animal) => (
                        <li
                            key={animal}
                        >{animal}</li>
                    ))
                )}
                    
                </ul>
            </div>
        </Layout>

    )

}

export default ejercicio4
