/* 

8. Contador de Palabras y Caracteres

Objetivo del ejercicio: 
Practicar eventos en tiempo real y manipulación avanzada del DOM.

Ejercicio: 
Crea una página con un campo de texto donde el usuario pueda escribir un párrafo. 
• Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo. 
• Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de 
línea.


*/

import Layout from "./layout";
import {useState} from 'react'

const Ejercicio8 = () => {

    const [texto, setTexto] = useState("")

    const conteoCaracteres = texto.replace(/\s/g, "").length;
    const conteoPalabras = texto.trim() === "" ? 0 : texto.trim().split(/\s+/).length;


    return (
        <Layout titulo="contador de palabras y caracteres">
            <textarea
                className = "pl-2 rounded-md border-3 w-80 h-20 border-black" 
                placeholder='Escribe tu nota...'
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            /> 
            <div className = "flex text-xl text-gray-600 font-black uppercase italic">
                <h2 className = "ml-10 mr-6">Caracteres: <span className = "text-red-400">{conteoCaracteres}</span></h2>
                <h2 className = "ml-6">Palabras: <span className = "text-blue-500">{conteoPalabras}</span></h2>
            </div>


        </Layout>
    )

}


export default Ejercicio8;