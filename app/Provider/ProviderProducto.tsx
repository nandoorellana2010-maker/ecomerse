import React, { useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { Producto } from '../modelos/Producto'
import { ContexrProducto } from '../Context/ContextProducto';

export default function ProviderProducto({ children }: Plantilla) {

    const [producto, setProducto] = useState<Producto[]>([
        {
            idProducto: 1,
            nombreProducto: 'papas',
            precioProducto: 10,
            isvProducto: 2,
            imgProducto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21FgnOvbIXre0wufIrR7c0oqU9AXen8UQ5iOpcTx_-A&s=10'
        },
        {
            idProducto: 2,
            nombreProducto: 'arroz',
            precioProducto: 80,
            isvProducto: 20,
            imgProducto: 'https://i0.wp.com/www.gastronoming.com/wp-content/uploads/2014/04/arroz-blanco-grano-largo.jpg?fit=1024%2C768&ssl=1'
        },
        {
            idProducto: 3,
            nombreProducto: 'Manzanas',
            precioProducto: 15,
            isvProducto: 4,
            imgProducto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjOJkmDWzl1kZk5fj8zdciagXjkocBBrak4pnTAGHHfw&s=10'
        },
        {
            idProducto: 4,
            nombreProducto: 'uvas',
            precioProducto: 90,
            isvProducto: 7,
            imgProducto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQorM1vLC7nuxx4ZEb2j4BNCBMGd7HQYfEXC4toZuHJDw&s=10'
        },
        {
            idProducto: 5,
            nombreProducto: 'zanahorias',
            precioProducto: 67,
            isvProducto: 6,
            imgProducto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKf7eB1MTwDp7ILHl-ZMxurE_KTVLxVtgArX_bb9_lQ&s=10'
        }

    ]);

    const [carritoProducto, setCarritoProducto] = useState<Producto[]>([]);

    function agregarCarrito(producto: Producto) {
        alert('Producto Agregado al carrito')
        setCarritoProducto([...carritoProducto, producto])
    }

    function eliminarCarrito(idProducto: number) {
        alert('Producto Eliminado del carrito')
        setCarritoProducto((actual) =>{
            const indice = actual.findIndex((item) => item.idProducto === idProducto)
            if (indice === -1) return actual

            return actual.filter((_, index) => index !== indice)
        })
    }

    return (
        <ContexrProducto.Provider value={{ producto, carritoProducto, agregarCarrito, eliminarCarrito }}>
            {children}
        </ContexrProducto.Provider>
    )
}

export function useContextProducto() {
    return useContext(ContexrProducto)
}
