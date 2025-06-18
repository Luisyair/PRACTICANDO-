import { Icon } from "@iconify/react/dist/iconify.js";
// import { BrowserRouter, Routes, Route } from "react-router";
import { Link } from "react-router";


export const CardList = () => {
    const TemasTeorria = [
        { Title: "useEfect", to: "/UseEffectPage"},
        { Title: "imagenes", to: "/ImagenesPage"},
    ];
    return (
        <div className="flex flex-col gap-4">
            {
                TemasTeorria.map((item, index) => (

                    // cada contenedor 
                    <Link to={item.to} key={index} item={item}
                    className="group w-full bg-gray-950 p-5 rounded 1xl border-1 border-amber-20 flex justify-between hover:border-amber-300
                    cursor-pointer">

                        {/* nombre de los temas  */}
                        <h3 className="font-medium text-lg group-hover:text-amber-300 "> {item.Title}</h3>

                        {/* icono de flechas  */}
                        <Icon className="group-hover:text-amber-300" icon="weui:arrow-filled" width="12" height="24" />

                    </Link>

                
                
                
                ))
            }

        </div>
    )
}