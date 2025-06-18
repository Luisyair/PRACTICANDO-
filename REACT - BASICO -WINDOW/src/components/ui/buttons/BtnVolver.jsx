import { Icon } from "@iconify/react/dist/iconify.js";

import { useNavigate } from "react-router-dom";

// este se reutilizara en todas las paginas que sean necesarias para que devuelva a la pagina anterior 

export const BtnVolver = () => {

    // ya hay una funcion propia de  React- router -dom para navegar a la pagina que yo quiera 
    const navigate = useNavigate()

    return(
        <button onClick={()=>navigate(-1)} className="absolute top-4 left-4 bg-white text-black p-3 rounded-full
        hover:bg-amber-200 shadow-lg cursor-pointer">
            <Icon icon="mingcute:arrow-left-fill" width="24" height="24" />
        </button>

    );
};