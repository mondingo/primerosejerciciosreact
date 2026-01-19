/* 

9. Lista de Tareas con LocalStorage

Objetivo del ejercicio: 
Practicar persistencia de datos con localStorage. 

Ejercicio: 
Crea una aplicación de lista de tareas. 
• Cada tarea debe incluir un texto y un checkbox para marcarla como completada. 
• Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga. 
• Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage.


*/

import Layout from "./layout";
import { useState, useEffect } from 'react';

const Boton = ({ click, info, color = "bg-red-300" }) => {
    return (
        <button
            onClick={click}
            className={`h-10 border-1 rounded-md ${color} px-6 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] m-2 hover:scale-110`}
        >
            {info}
        </button>
    )
}

const Ejercicio9 = () => {
    // 1. ESTADO: Intentamos cargar de LocalStorage al arrancar
    const [lista, setLista] = useState(() => {
        const memoria = localStorage.getItem("tareas_repaso");
        return memoria ? JSON.parse(memoria) : [];
    });
    const [texto, setTexto] = useState("");

    // 2. EFECTO: Cada vez que la lista cambie, guardamos en LocalStorage
    useEffect(() => {
        localStorage.setItem("tareas_repaso", JSON.stringify(lista));
    }, [lista]);

    // 3. FUNCIONES
    const añadirTarea = () => {
        if (texto.trim() === "") return;
        const nueva = { id: Date.now(), contenido: texto, completada: false };
        setLista([...lista, nueva]);
        setTexto(""); // Limpiamos el input
    }

    const toggleTarea = (id) => {
        const listaNueva = lista.map(t => 
            t.id === id ? { ...t, completada: !t.completada } : t
        );
        setLista(listaNueva);
    }

    const borrarCompletadas = () => {
        const pendientes = lista.filter(t => t.completada === false);
        setLista(pendientes);
    }

    return (
        <Layout titulo="Lista de Tareas con LocalStorage">
            <div className="flex flex-col items-center">
                {/* Entrada de texto */}
                <input
                    className="pl-2 rounded-md border-3 w-80 h-10 border-black mb-2"
                    placeholder='Escribe una tarea...'
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                />
                
                <Boton info="Crear nueva tarea" click={añadirTarea} color="bg-blue-300" />

                <h2 className="text-xl my-6 text-gray-600 font-black uppercase italic border-b-2 border-black">
                    Lista de tareas
                </h2>

                {/* Renderizado de la lista */}
                <div className="w-80">
                    {lista.map((tarea) => (
                        <div key={tarea.id} className="flex items-center justify-between bg-white p-2 border-1 border-black mb-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className={tarea.completada ? "line-through text-gray-400" : ""}>
                                {tarea.contenido}
                            </span>
                            <input 
                                type="checkbox" 
                                checked={tarea.completada} 
                                onChange={() => toggleTarea(tarea.id)}
                                className="w-6 h-6 accent-green-500"
                            />
                        </div>
                    ))}
                </div>

                {/* Botón de limpieza */}
                {lista.some(t => t.completada) && (
                    <Boton info="Borrar completadas" click={borrarCompletadas} />
                )}
            </div>
        </Layout>
    )
}

export default Ejercicio9;