/* 

5. Calculadora Sencilla 

Objetivo del ejercicio: 
Practicar la manipulación de formularios, eventos, y lógica básica de JavaScript.
 
Ejercicio: 
Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar", 
"Multiplicar", y "Dividir". 
● Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un 
área de texto o debajo de los botones. 
● Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías). 


*/

import Layout from './layout';
import {useState} from 'react';

const Boton = ({operacion, click}) => {
    return(
        <button 
            onClick={click}
            className = "border-1 rounded-md bg-red-300 px-6 font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] m-4 hover:scale-110 hover:bg-red-400"
        >
            {operacion}
        </button>
    )
}



const Ejercicio5 = () => {

    const [primerRecuadro, setPrimerRecuadro] = useState()
    const [segundoRecuadro, setSegundoRecuadro] = useState()
    const [resultado, setResultado] = useState(0)

    const calcular = (tipo) => {
        const num1 = Number(primerRecuadro)
        const num2 = Number(segundoRecuadro)
    
        if (tipo === "+") setResultado(num1+num2);
        if (tipo === "-") setResultado(num1-num2);
        if (tipo === "x") setResultado(num1*num2);
        if (tipo === "%") {
            if (num2 === 0){
                alert("No se puede dividir entre 0")
            } else {
                setResultado(num1/num2);
            }
        }
    }

    return(
        <Layout titulo="Calculadora">
            <div className = "mb-2">
                <input 
                    className = "border-3 rounded-md pl-2 mr-2 bg-blue-100"
                    placeholder = "Primer numero"
                    value = {primerRecuadro}
                    type="number" 
                    onChange = {(event) => setPrimerRecuadro(event.target.value)}
                />

                <input 
                    className = "border-3 rounded-md pl-2 ml-2 bg-blue-100"
                    placeholder = "Segundo numero"
                    value = {segundoRecuadro}
                    type="number" 
                    onChange = {(event) => setSegundoRecuadro(event.target.value)}
                />
            </div>
            <div>
                <Boton operacion="+" click={() => calcular('+')}></Boton>
                <Boton operacion="-" click={() => calcular('-')}></Boton>
                <Boton operacion="x" click={() => calcular('x')}></Boton>
                <Boton operacion="%" click={() => calcular('%')}></Boton>
                <hr className="border-1 border-black mt-2" />
            </div>

            <input 
                className = "border-3 rounded-md pl-2 ml-2 bg-blue-100 w-80 h-10 mt-6"
                placeholder = "Resultado"
                value = {resultado}
                type="number" 
            />

        </Layout>
    )
}

export default Ejercicio5;