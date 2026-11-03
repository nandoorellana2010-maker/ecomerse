import { useContextProducto } from '../Provider/ProviderProducto'

interface CardProductoProps {
    vista: 'productos' | 'carrito'
}

export default function CardProducto({ vista }: CardProductoProps) {
    const { producto, carritoProducto, agregarCarrito, eliminarCarrito } = useContextProducto()
    const productosMostrar = vista === 'productos' ? producto : carritoProducto

    return (
        <>
            {productosMostrar.map((item, index) => (
                <div className='col-md-4' key={`${item.idProducto}-${index}`}>
                    <div className='card'>
                        <div className='card-header'>{item.nombreProducto}</div>
                        <div className='card-body'>
                            <p>Precio Producto - Lps {item.precioProducto}</p>
                            <p>Isv Producto - Lps {item.isvProducto}</p>
                            <img src={item.imgProducto} alt={item.nombreProducto} />
                        </div>
                        <div className='card-footer'>
                            {vista === 'productos' ? (
                                <button
                                    className='btn btn-info btn-sm'
                                    onClick={() => agregarCarrito(item)}
                                >
                                    Agregar al Carrito
                                </button>
                            ) : (
                                <button
                                    className='btn btn-danger btn-sm'
                                    onClick={() => eliminarCarrito(item.idProducto)}
                                >
                                    Eliminar
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
