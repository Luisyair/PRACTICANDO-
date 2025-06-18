{// 1 ejericio 

// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import { HolaMundo } from "./components/Holamundo.jsx"
// // import { Contador } from "./components/Contador.jsx"
// // import { CardProducto } from "./components/CardProducto.jsx";
// import { MyRoutes } from "./routers/routers.jsx";

// // Creacion de funcion = componente 

// function App() {

//   // const frutas = ["Manzana", "Pera", "Uva"];
//   // const productos = [
//   //   { nombre: "laptop", precio: 1200, destacado: true },
//   //   { nombre: "mouse", precio: 300, destacado: false },
//   //   { nombre: "teclado", precio: 600, destacado: false }
//   // ];

//   return (
//     // es necesario poner un contenedor para que no de error, puede ser un div o un fragment  h- screen : toda la pantalla
//     // <div className="bg-black h-screen text-white">
//     //   <HolaMundo />
//     //   <Contador />

//     //   {/* /* javascript se habre con {}   */}

//     //   {
//     //     frutas.map((fruta, index) => {

//     //       return (
//     //         <div key={index} className="text-white">

//     //           {fruta}

//     //         </div>
//     //       )
//     //     })
//     //   }

//     //   <span>Prodcutos </span>

//     //   {/* mapaear los prodcutos  para separar unos de otros*/}
//     //   <section className="flex flex-col gap-4">
//     //     {
//     //       productos.map((producto, index) => (
//     //         // <div key={index}>{producto.nombre}</div>
//     //         <CardProducto key={index} producto={producto}/>

//     //       ))
//     //     }


//     //   </section>





//     // </div>


  



//   );
// }

// // publicando para que otro componente lo pueda usar // default export porque es una pagina principal 
// // export default App

}


// 2 ejercicio 
import { MyRoutes } from "./routers/routers.jsx";

// Creacion de funcion = componente 

function App() {


  return (
   
    // Ahora realizaremos la visualizacion de las rutas con React router dom , ya creamos dos paginas o componentes para renderizar

    <MyRoutes/>



  );
}



export default App;

