'use client'
import CardProducto from '@/app/Components/CardProducto';

export default function Page() {
    return (
        <div className='container'>
            <div className='row'>
                <CardProducto vista='carrito' />
            </div>
        </div>
    )
}
