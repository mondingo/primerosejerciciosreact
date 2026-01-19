/* 

3. Lista Dinámica 

Objetivo del ejercicio: 
Trabajar con la creación, eliminación y manipulación de elementos del DOM. 

Ejercicio: 
Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo. 
● Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un 
nuevo elemento de la lista. 
● Añade un botón al lado de cada elemento para eliminarlo de la lista. 

*/

import Layout from './layout';
import {useState} from 'react';

const Ejercicio3 = () => {
    const [texto, setTexto] = useState("")
    const [lista, setLista] = useState([])

    return (
        <Layout titulo="Lista Dinámica">
            <div className = "flex flex-col items-center w-full">
                <textarea
                    className = "rounded-md border-3 w-80 mb-2 h-20 border-black" 
                    placeholder='Escribe tu nota...'
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    /> 
                <button
                    onClick = {() => {
                        setLista([...lista, texto]);
                        setTexto("");
                    }}
                    className = "bg-black px-16 py-4 text-white font-bold rounded-xl hover:scale-110 active:scale-90 transition-transform"
                >
                    Añadir tarea
                </button>
                <h2 className="text-2xl mt-10 text-gray-600 font-black mb-6 uppercase italic">Lista de tareas</h2>
                <ul>
                    {lista.map((item,index) => (
                        <li key={index} className="font-bold p-2 uppercase italic">
                            {index+1}. {item}
                        <button 
                            className = "ml-4 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700"
                            onClick={() => {
                                const listaNueva = lista.filter((_, i) => i !== index);
                                setLista(listaNueva)
                            }}
                        > X 
                        </button>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </Layout>
    )

}

export default Ejercicio3;