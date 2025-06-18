export const CardProducto = ({producto})=> (
    
    <div className="p-4 border rounded-2xl shadow-2xl">
        <h3 className="text-xl font-bold">{producto.nombre}</h3>
        <p className="text-gray-400">{producto.precio}</p>
        {
         producto.destacado && <span className="text-yellow-500">💖 Producto destacado</span>        }
    </div>
);
