import React from 'react'
import { useContextProducto } from '../Provider/ProviderProducto'

export default function CardProducto() {

    const {producto, agregarCarrito } = useContextProducto()
    const { eliminarCarrito } = useContextProducto()
    return (
        <>{producto.map((item) =>(
        <div className='card' key={item.idProducto}>
            <div className='card-header'>{item.nombreProducto}</div>
            <div className='card-body'>
                <p>Precio Producto - Lps {item.precioProducto}</p>
                <p>Isv Producto - Lps {item.isvProducto}</p>
                <img src={item.imgProducto} alt={item.nombreProducto}/>

            </div>
            <div className='card-footer'>
                <button className='btn btn-info btn-sm' onClick={() => agregarCarrito(item)}>Agregar al Carrito</button>
                <button className='btn btn-danger btn-sm' onClick={()=> eliminarCarrito(item)}>Eliminar</button>
            </div>
        </div>
        ))}
        </>
    )
}
