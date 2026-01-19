/* 

7. Generador de Contraseñas Aleatorias

Objetivo del ejercicio: 
Practicar generación de cadenas aleatorias y uso de formularios. 

Ejercicio: 
Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que 
diga “Generar contraseña”. 
• Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando 
letras, números y caracteres especiales. 
• Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la 
longitud debe ser mayor o igual a 4.

*/

import {useState} from 'react'
import Layout from './layout'

const Boton = ({click}) => {
    return(
        <button 
            onClick={click}
            className = " h-10 border-1 rounded-md bg-red-300 px-6 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] m-4 hover:scale-110 hover:bg-red-400"
        >
            Generar contraseña
        </button>
    )
}

const Ejercicio7 = () => {

    const [cuadroPass, setCuadroPass] = useState(0)
    const [passwd, setPasswd] = useState("")

    const generador = () => {

        let passwordFinal = ""

        const longitud = parseInt(cuadroPass)

        const caracteres = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 
            'V', 'W', 'X', 'Y', 'Z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
            'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 
            '-', '=', '[', ']', '{', '}', ';', ':', "'", '"', '|', ',', '.', '<', '>', '/', '?', '~', '`'
        ];

        if (longitud < 5 || cuadroPass === ""){
            alert ("No se puede generar una contraseña de menos de 5 caracteres")
            return;
        } 
        
            for (let i=0; i<longitud; i++){
                const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
                passwordFinal = passwordFinal + caracteres[indiceAleatorio];
            }

        setPasswd(passwordFinal);
        
    }

    return (
        <Layout titulo="Generador de contraseñas aleatorias">
            <input
                className = "border-2 rounded-md pl-2 ml-2 bg-blue-100"
                type="number" 
                placeholder = "Nº de caracteres"
                value = {cuadroPass}
                onChange={(e) => setCuadroPass(e.target.value)}
            />
            <Boton
                click = {() => generador()}    
            >
            </Boton>
            {passwd && (
                <div className="mt-6 p-4 bg-gray-100 border-2 border-dashed border-black rounded-lg text-center">
                    <p className="text-xs text-gray-500 uppercase font-black mb-2">Tu contraseña segura:</p>
                    <span className="text-2xl font-mono break-all bg-white px-2">{passwd}</span>
                </div>
            )}
        </Layout>
    )

}




export default Ejercicio7;