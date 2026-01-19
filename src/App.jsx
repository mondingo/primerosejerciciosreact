import {useState} from 'react'
import CambiadorColor from './ejercicio1'
import Ejercicio2 from './ejercicio2'
import Ejercicio3 from  './ejercicio3'
import Ejercicio4 from './ejercicio4'
import Ejercicio5 from './ejercicio5'
import Ejercicio6 from './ejercicio6'
import Ejercicio7 from './ejercicio7'
import Ejercicio8 from './ejercicio8'
import Ejercicio9 from './ejercicio9'



function App() {
  
  // Con vista seleccionamos el ejercicio a mostrar. El 0 es el menu
  const [vista, setVista] = useState(0);

    const renderizarEjercicio = () => {
      switch(vista) {
        case 1: return <CambiadorColor />
        case 2: return <Ejercicio2 />
        case 3: return <Ejercicio3 />
        case 4: return <Ejercicio4 />
        case 5: return <Ejercicio5 />
        case 6: return <Ejercicio6 />
        case 7: return <Ejercicio7 />
        case 8: return <Ejercicio8 />
        case 9: return <Ejercicio9 />
        default: return (
          <div className = "min-h-screen bg-gray-100 p-10">
            <h1 className = "text-4xl font-black text-center mb-10 uppercase"> Mis 9 ejercicios</h1>
            <div className = "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[1,2,3,4,5,6,7,8,9].map((num) => (
                <button
                  key={num}
                  onClick={() => setVista(num)}
                  className = "bg-white border-4 border-black p-6 rounded-xl font-bold text-xl hover:bg-yellow-400 hover:-translate-y-1 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                  Ejercicio {num}
                </button>
              ))}
            </div> 
          </div>
        );
      }
    };

  return (
    <>
      {vista !== 0 && (
        <button
          onClick={() => setVista(0)}
          className = "fixed top-5 left-5 z-50 bg-black text-white px-4 py-2 rounded-full font-bold hover:bg-red-600 transition-colors"
        >
          Volver al menú
        </button>
      )}

      {renderizarEjercicio()}
    </>
  )
};

export default App
