import { useEffect, useState } from "react";
// import { BtnVolver } from "../components/ui/buttons/BtnVolver.jsx";

import { BtnVolver } from "../components/ui/buttons/BtnVolver";

export const UseEffectPage = () => {

    // hook de react useEffect importante poner la coma y los [] para no generar un bucle 

    const [segundos, setSegundos] = useState(0);
    useEffect(() => {

        /* setInterval es una funcion propiade javascript, ejecuta una funcion u determinado tiempo
         incrementar 1 segundo */
        const intervalo = setInterval(() => {
            setSegundos((s) => s+1);


        }, 1000);

        // con esta instruccion limpiaa y para la ejecucion 
        return ()=> clearInterval(intervalo)

            // cada vez quye la pagina cargue pero solo 1 vez : , [])
    }, [])


    return (
        <div className="h-screen bg-amber-400 text-black flex 
        flex-col justify-center items-center">
            <BtnVolver/>
            <h2 className="text-3xl font-bold mb-6"> Contador  </h2>

            <div className="w-48 h-48 rounded-full bg-white border-8
            border-black flex items-center  justify-center shadow-lg">

            <span className="text-4xl font-semibold"> {segundos}</span>

            </div>
        </div>
    );
};