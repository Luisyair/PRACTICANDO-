import { useState } from "react";
import { Modal } from "./Modal.jsx";

export const Contador = () => {

    // useState es un hook que permite manejar el estado de un componente, se importa desde react
    // const [contador, setContador] = useState(0); // contador es el estado y setContador es la funcion que lo actualiza 




    // mostrat false o verdadero 

    const [mostrar, setMostrar] =useState(false); // mostrar es el estado y setMostrar es la funcion que lo actualiza, por defecto es false

    

    return (
        <div className="bg-amber-600 p-4 rounded-2xl">


            <h1 className="contador"> Contador</h1>

            <button onClick={() => setMostrar (!mostrar)}> 
            {!mostrar ? "MOSTRAR": "OCULTAR"} </button>







    { mostrar && <Modal/> }
           
           


        </div>

    )

};


